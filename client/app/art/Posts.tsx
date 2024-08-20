'use client'

import React from "react";
import Image from "next/image";


export default function Posts (props: any) {
    console.log(props.source)
    return (
        //<h1>hi</h1>
        <Image src={props.source} alt="Girl in a raincoat" width={100} height={100}/>
    )
}
