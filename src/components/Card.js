import React from "react";



export default function Card({id,title,image,instructor}) {
    
    return (
      <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt='no image' className="image-widht"/>
            <h4 className="card-title">{title}</h4>
            <p className='card-text text-secondary'>{instructor}</p>
            <a href="#!" className="btn btn-outline-secondary rounded-0">
                redes
            </a>
        </div>
      </div>
    )
  }