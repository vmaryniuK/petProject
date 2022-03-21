import React from "react";
import Headerpicture from "./headerpicture/headerpicture";
import Headertitle from "./headertitle/headertitle";
import "./header.scss"

export default function Header(){
    return (
        <div className="header">
             <Headerpicture/>
             <div className="headtitle">
                 <Headertitle/>
             </div>
        </div>
             
    )
}