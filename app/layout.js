"use client"
import "./globals.css";
import Header from "@/Components/Header";
import { RecoilRoot } from "recoil";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717]">
        <RecoilRoot>
          <Header />
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
