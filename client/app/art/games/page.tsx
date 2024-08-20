//this wil be a page that can have general synopses and maybe graphics from my games
// will be barren at first... any links will redirect to itch.io 
import React from "react";
import { setMaxIdleHTTPParsers } from "http";
import Ribbon from "../../components/Ribbon";


export default async function Art() {
    const res = await fetch('http://127.0.0.1:8080/api/art');
    const title = await res.json();

    return (
        <div>
            <Ribbon />
            <main className="flex min-h-screen flex-col items-center justify-start p-24">
                <h1>hi</h1>    
            </main>
        </div>

    );
}