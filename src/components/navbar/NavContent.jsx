import React from 'react'

const NavContent = () => {
  return (
    <>
        <h2>Mousom.</h2>
        <div className='nav-menu'>
            <a href='#home'>home</a>
            <a href='#work'>experience</a>
            <a href='#timeline'>timeline</a>
            <a href='#services'>skills</a>
            <a href='#contact'>contact</a>
        </div>    
        <a href='mailto:mousoms2204@gmail.com'>
            <button className='navBtn'>Email</button>
        </a>
    </>
  )
}

export default NavContent