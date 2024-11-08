// import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    )
}