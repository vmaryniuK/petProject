import React from "react";
import "./cards.scss"

  const Cards =({header,description})=>{

    return(
        <div className="cards">

          <div className="cardimag">
              <img src="https://cs8.pikabu.ru/post_img/2016/08/14/10/147119547411336083.png" alt="" />
          </div>
          <div className="cardtitle">
              <h2> {header}</h2>
          </div>
          <div className="carddescription">
              <p>{description}</p>
          </div>
          <div className="cardbutton">
            <button type="text">Add to Favourite</button>
          </div>
        </div>
    )

} 
export default Cards;