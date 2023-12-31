import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "@/components/Navbar";
import { NextAuthSessionProvider } from "@/components/NextAuthSessionProvider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <NextAuthSessionProvider>
            <Navbar />
            {children}
          </NextAuthSessionProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
