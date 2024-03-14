import React from "react";
import { setMaxIdleHTTPParsers } from "http";




export default async function Home() {

  const res = await fetch('http://127.0.0.1:8080/api/home');
  const title = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>{title.message}</h1>
    </main>
  );
}



//this is the home page you get to after the entry
//this should give some details and maybe display a piece of art
