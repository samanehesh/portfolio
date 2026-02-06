import type { Metadata } from "next";
import "./globals.css"
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
            <main className="flex-1">
              {children}
            </main>          
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}