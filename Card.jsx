import React from "react";
 
export default function Card(props){
    let  vlaue ;
     if(props.openspots === 0){
        vlaue ="SOLD OUT"
    }else if(props.location === "Online"){
        vlaue = "ONLINE"
    }
    return(
        <div className="card-contaner"> 
            <div className="card">
                {vlaue && <div className="card--badge">{vlaue}</div>}
                <img src={`../img/${props.img}`}/>
                <div className="card-stats">
                    <i className="fa-regular fa-star"></i>
                        <span>{props.rating}</span>
                        <span className="gray">({props.reviewCount}) • </span>
                        <span className="gray">{props.location}</span>
                </div>
                <p className="title">{props.title}</p>
                <p className="price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}