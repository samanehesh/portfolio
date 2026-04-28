import type { Metadata } from "next";
import "./globals.css"
import CommonLayout from '@/layouts/CommonLayout'; 
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: "Samaneh Heshmatzadeh | Full Stack Software Developer",
  description: "Portfolio of Samaneh Heshmatzadeh, a full stack software developer building responsive web applications with React, Next.js, Node.js, C#, and SQL.",
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
    <html lang="en" suppressHydrationWarning>

      <body>
        <ThemeProvider>

          <CommonLayout>{children}</CommonLayout>
        </ThemeProvider>

      </body>
    </html>
  );
}
