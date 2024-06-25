import React from "react";
import { setMaxIdleHTTPParsers } from "http";
import Ribbon from "../components/Ribbon";



export default async function Art() {
    const res = await fetch('http://127.0.0.1:8080/api/contact');
    const title = await res.json();

    return (
        <div>
            <Ribbon />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="p-20 text-2xl font-bold">{title.message}</h1>
            </main>
        </div>

    );
}