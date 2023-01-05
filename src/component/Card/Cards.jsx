import React from 'react'
import '../Card/Card.css'

import Userdata from '../Userdata/Userdata'

export const Cards = () => {

  const data= Userdata;
  console.log(data)
            




  return (
    
    <div className='cardcontainer'>

       
       {data.map((item,id)=>{

        return (

          <div className='cardbox corner'
        key={item.id}
        >
        <div><img className='cardimg' alt='' src={item.img} /></div>
        <div className='infoBox'>
          <h3>{item.Title}</h3>

          <div className='authdate'><span  className='auth'>{item.author}</span> | <span className='date'>21 Jul 2022</span></div>

          <div className='description'><p>{item.desc}</p></div>

        </div>

       </div>


        )
      


       })}
      



    </div>
  )
}
