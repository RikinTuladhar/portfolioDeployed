'use server'
import { createSession, deleteSession } from "@/lib/session"

import { redirect } from "next/navigation";
import {z} from "zod"
const admin= {
    id:"1",
    email:"rikin.tuladhar@gmail.com",
    password:"rikin.tuladhar@gmail.com"
}

const loginScheme = z.object({
    email:z.string().email({message:"Invalid Email Address"}).trim(),
    password:z.string().min(8,{message:"Password must be atleast 8 characters"}).trim()
})

export async function login(prevState, formData) {
    const result = loginScheme.safeParse(Object.fromEntries(formData))
    if(!result.success){
        return {
            errors:result.error.flatten().fieldErrors
        }
    }

    const {email,password} = result.data;
    if(email !== admin.email || password !== admin.password){
        return {
            errors:{
                email:["Invalid email or password"]
            }
        }
    }

    await createSession(email);
    redirect("/admin")
    
}

export async function logout(params) {
    await deleteSession();
     redirect("/login")
}