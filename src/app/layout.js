import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campus Recruitmennt System",
  description: "By Saim",
};

export default function RootLayout({ children }) {
  return (
  <Providers>
  <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"/>
<link href="https://fonts.googleapis.com/css2?family=Tauri&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>

  </Providers>
  );
}
