import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
    return (
        <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Qneq-FDsHb6pE4K2bflk7bapK0NINBV3dw&usqp=CAU" alt="logo" />
             <div className="headtitle">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorite'>Favorites</Link>
                    </li>
                   
                </ul>
             </div>
        </div>        
    )
};

export default Header;