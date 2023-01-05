
import React from 'react'
import '../Header/Header.css'


export const Header = () => {
  return (
    <div className='Header'>
      <div className='logo'>
        <span className='logop1'>EDYODA</span>
        <span className='logop2'>Stories</span>
  </div>

      <div className='list'>
        <div>Explore </div>
        <div>Categories</div>
        {/* <div>v</div> */}
      </div>

    



      <div className='button-box'></div>
         <div className='hpara'>Edyoda is free learning and knowledge sharing platform for techies</div>
        <button className='Hbtn'>Go To Main Website</button>
    </div>
  )
}
