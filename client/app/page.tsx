//"use client";
//import { setMaxIdleHTTPParsers } from "http";
import React from "react"



export default async function Home() {
    const res = await fetch('http://127.0.0.1:8080/api/dev');
    const title = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>{title.message}</h1>
    </main>
  );
}
