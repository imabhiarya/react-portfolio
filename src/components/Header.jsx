import React from 'react'

import GitImg from '../assets/github-icon.svg'
import LinkedInLogo from '../assets/linkedIn-logo.png'

function Header() {
  return (
    <div className='flex items-center justify-between w-8/12 mt-3'>
        <p className='text-[#ffffff] text-2xl font-extrabold cursor-pointer'>abhishekarya</p>
        <div className='flex gap-3'>
        <a href="https://github.com/imabhiarya">
            <img src={GitImg} alt="github icon"  /> 
        </a>
        <a href="https://www.linkedin.com/in/thearyaabhishek/">
            <img src={LinkedInLogo} alt="Linkedin icon" height={44} width={46} /> 
        </a>
        </div>
    </div>
  )
}

export default Header