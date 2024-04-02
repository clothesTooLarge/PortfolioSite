//this is gonna be an about me that will go (kinda) in depth on me
//its a portfolio website but will still bear my alias 
//probably have a section here with my contacts honestly
import React from "react";
import { setMaxIdleHTTPParsers } from "http";
import Ribbon from "../components/Ribbon";



export default async function Art() {
    console.log("ART")
    const res = await fetch('http://127.0.0.1:8080/api/about');
    const title = await res.json();

    return (
        <div>
            <Ribbon />
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <h1>{title.message}</h1>
            </main>
        </div>

    );
}