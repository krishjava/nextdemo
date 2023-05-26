"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  
  title: 'Create Next App',
  description: 'Generated by create next app git@github.com:krishjava/nextdemo.git',
}

export default function RootLayout({ children }) {
  // const [state, setState] = useState(""); 
  const data = async ()=>{
    const res = await fetch('https://100paisa.000webhostapp.com/rest.php');
    const result= await res.json(); 
    console.log(`res ${JSON.stringify(result)}`);
  }

  useEffect(()=>{
    data();
  })
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
