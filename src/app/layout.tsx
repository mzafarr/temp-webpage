"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppContext, AppContextProvider } from "./context/data";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <AppContextProvider>
        <body className={inter.className}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
