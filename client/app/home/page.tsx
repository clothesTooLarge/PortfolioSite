"use client";
import { setMaxIdleHTTPParsers } from "http";
import React, {useEffect, useState} from "react"



export default function Home() {
  const[title, setTitle] = useState('LOADING....')
  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/home')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTitle(data.message)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>{title}</h1>
    </main>
  );
}