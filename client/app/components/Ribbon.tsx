//this component will be for the top ribbon to navigate the site
//should persist throughout every page
'use client'

import React from "react";
import { redirect } from "next/navigation";
import "/home/clothes/PortfolioSite/client/app/globals.css";

export default async function Ribbon() {
    function ribbonClick(e: MouseEvent) {
        var button = e.target.className;
        console.log(button)
        switch(button)
        {
            case "Ribbon_Home":
                console.log("Rerouting to ", button);

            case "Ribbon_About":
                console.log("Rerouting to ", button);

            case "Ribbon_Art":
                console.log("Rerouting to ", button);
                return {redirect:{
                    permanent: false,
                    path: '/art'
                }}
            case "Ribbon_Contact":
                console.log("Rerouting to ", button);
                

        }
    }
  
    return (
        <ul className="ribbon">
            <li>
                <button className="Ribbon_Home" onClick={ribbonClick}>Home</button>
            </li>
            <li>
                <button className="Ribbon_About" onClick={ribbonClick}>About</button>
            </li>
            <li>
                <button className="Ribbon_Art" onClick={ribbonClick}>Art</button>
            </li>
            <li>
                <button className="Ribbon_Contact" onClick={ribbonClick}>Contact</button>
            </li>
            
            
            
        </ul>
    
    );
  } 