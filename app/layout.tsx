import React, { useState } from "react";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import Header from "@/components/overview/Header";
import Main from "@/components/overview/Main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          "dark"
        )}
      >
        <div className="grid h-screen w-full">
          <div className="flex flex-col">
            <Header />
            <Main />
          </div>
        </div>
      </body>
    </html>
  );
}
