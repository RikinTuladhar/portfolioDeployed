import localFont from "next/font/local";
import "./globals.css";
import ProviderRedux from "@/helper/ProviderRedux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rikin Tuladhar's Portfolio",
  description:
    "It's my digital world which contains all my professional skills and projects that I have built.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderRedux>{children}</ProviderRedux>
      </body>
    </html>
  );
}
