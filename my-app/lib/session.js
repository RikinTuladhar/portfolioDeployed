import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = "secret";
const encodedkey = new TextEncoder().encode(secretKey);
console.log(encodedkey);

export async function createSession(email) {
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
//   const payload =;
  const session = await encrypt( { email, expiresAt });

  (await cookies()).set("session",session,{
    httpOnly:true,
    secure:true,
    expires:expiresAt
  })
}

export async function deleteSession() {
    (await cookies()).delete("session")
}


export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedkey);
}


export async function decrypt(session) {
    try {
        const {payload} = await jwtVerify(session,encodedkey,{
            algorithms:["HS256"]
        })
        return payload;
    } catch (error) {
        console.log("Failed to vertify session")
    }
    
}