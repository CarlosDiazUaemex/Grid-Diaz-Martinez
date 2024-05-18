import React from 'react'
import Card from './Card'

import image1 from '../assets/java.png'
import image2 from '../assets/nginx.jpg'
const cards=[
    {
        id:1,
        title:'javascript',
        image:image1,
        instructor:'juan juanito'   
    },
    {
        id:2,
        title:'java',
        image:image2,
        instructor:'Pepe pepito'   
    },
    {
        id:3,
        title:'python',
        image:image1,
        instructor:'agustin agus'   
    },
    {
        id:4,
        title:'python',
        image:image1,
        instructor:'agustin agus'   
    }
]
export default function Cards() {
    console.log(cards);
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'> 
        <div className='row'>
            
            {
                cards.map(c =>(
                    <div className='col-md-4' key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        instructor={c.instructor}
                        />
                        </div>
                ))
            }
        </div>
    </div>
  )
}