//this component will be for the top ribbon to navigate the site
//should persist throughout every page
'use client'

import React from "react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

export default async function Ribbon() {

    const router = useRouter();

    function ribbonClick(e: MouseEvent) {
        var button = e.target.id;
        console.log(button)
        switch (button) {
            case "Ribbon_Home":
                router.push("/home");
                break;
            case "Ribbon_About":
                router.push("/about");
                break;
            case "Ribbon_Art":
                router.push("/art");
                break;
            case "Ribbon_Contact":
                router.push("/contact");
                break;

        }
    }

    return (
        <header className="flex justify-evenly py-5 bg-black p-0 text-white font-semibold">
            <button id="Ribbon_Home" className="" onClick={ribbonClick}>Home</button>
            <button id="Ribbon_About" className="" onClick={ribbonClick}>About</button>
            <button id="Ribbon_Art" className="" onClick={ribbonClick}>Art</button>
            <button id="Ribbon_Contact" className="" onClick={ribbonClick}>Contact</button>
        </header>

    );
} 