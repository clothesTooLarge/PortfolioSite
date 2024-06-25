import React from "react";
import { setMaxIdleHTTPParsers } from "http";
import Ribbon from "../components/Ribbon";
import Posts from "./Posts";

export default async function Art() {
    const res = await fetch('http://127.0.0.1:8080/api/art');
    const title = await res.json();

    return (
        <div>
            <Ribbon />
            <main className="flex min-h-screen flex-col items-center justify-start p-24">
                <h1 className="p-20 text-2xl font-bold">{title.message}</h1>
                <div>
                    <Posts source={'https://i.imgur.com/t8cedpP.png'}/>
                </div>
                
            </main>
        </div>

    );
}