import React from 'react'

import GitImg from '../assets/github-icon.svg'

function Header() {
  return (
    <div className='flex items-center justify-between w-8/12 mt-3'>
        <p className='text-[#ffffff] text-2xl font-extrabold'>abhishekarya</p>
            <img src={GitImg} alt="github icon" /> 
    </div>
  )
}

export default Header