import type { Metadata } from "next";
import "./globals.css"
import CommonLayout from '@/layouts/CommonLayout'; 
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: "Portfolio-Samaneh Heshmatzadeh",
  description: "Samaneh Heshmatzadeh portfolio",
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