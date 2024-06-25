//this is gonna be an about me that will go (kinda) in depth on me
//its a portfolio website but will still bear my alias 
//probably have a section here with my contacts honestly
import React from "react";
import { setMaxIdleHTTPParsers } from "http";
import Ribbon from "../components/Ribbon";



export default async function Art() {
    const res = await fetch('http://127.0.0.1:8080/api/about');
    const title = await res.json();
    console.log(title);

    return (
        <div>
            <Ribbon />
            <main className="flex min-h-screen flex-col items-center justify-start p-24 ">
                <h1 className=" p-20 text-2xl font-bold">ABOUT US</h1>
                <p className="p-20 w-1/3 text-lg ">{title.message}</p>
            </main>
        </div>

    );
}