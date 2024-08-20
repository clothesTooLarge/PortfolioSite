//this wil be a page that users can use to sift through a variety of my art works
// might make sections for different kinds of works idk though
// probably after I start making short comics I will add a section for that 
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