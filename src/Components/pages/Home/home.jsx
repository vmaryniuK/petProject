import React from "react";
import Cards from "../../Cards"
import "./home.scss"


const Home = () => {

    const arr = [
       {
            img:"",
            header:"Headerone",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        },
       {
            img:"",
            header:"Headertwo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        } ,
        {
            img:"",
            header:"Headerone",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        },
       {
            img:"",
            header:"Headertwo",
            description:"Lorem ipsum dolor Lorem ipsum dolor si Lorem ipsum dolor si "
        } ,
        {
            img:"",
            header:"Headerone",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        },
       {
            img:"",
            header:"Headertwo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        } ,
        {
            img:"",
            header:"Headerone",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        },
       {
            img:"",
            header:"Headertwo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        }  ,
        {
            img:"",
            header:"Headerone",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        },
       {
            img:"",
            header:"Headertwo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae, officia corrupti eius porro eos consectetur repellendus sit ipsam, nesciunt quaerat ab dolorem. Et saepe vero doloribus rerum architecto sit?"
        } 
    ];
    return (
        <div className="home">     
            {
                arr.map((item) => (
                <Cards
                    header={item.header}   
                    description={item.description} 
                />
                ))
            }
          
        </div>        
    )
};

export default Home;