import type { Metadata } from "next";
import "./globals.css"
import CommonLayout from '@/layouts/CommonLayout'; 

export const metadata: Metadata = {
  title: "Portfolio-Samaneh Heshmatzadeh",
  description: "Samaneh Heshmatzadeh",
  icons: {
    icon: "/images/sama.svg",  
    apple: "/images/sama.svg", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}