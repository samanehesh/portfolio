'use client'
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/style.commonLayout.css'

export default function CommonLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure this is true only after client-side mount
  }, []);

  if (!isMounted) {
    // Return null or a loading placeholder while waiting for client-side mount
    return null; 
  }

  return (
    <div id = 'mainBody'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}