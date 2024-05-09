import React from 'react'
import myImg from '../assets/abhishek.png'
import ovalImg from '../assets/Oval.svg'
import bgLogoImg from '../assets/bg-img.svg'
import Contact from './Contact'


function Home() {

  return (
    <div className='flex w-8/12 my-10 border-b-2'>
        <div className='w-6/12 mt-8'>
        <h1 className='text-7xl font-bold mb-10'>Nice to meet you! <br /> I'm <span className='underline underline-offset-8 decoration-[#6C1BF0]'>Abhishek Arya</span></h1>
        <p className='text-xl font-semibold'>I am a passionate full stack MERN developer with a strong foundation in web development. With a keen eye for detail and a commitment to delivering high-quality work, I take pride in creating web applications that are both functional and visually appealing.</p>
        <button className='uppercase underline underline-offset-8 decoration-[#6C1BF0]  my-16 font-semibold text-2xl'>Contact Me</button>
        </div>
        <div className='flex items-center justify-center w-6/12 relative'>
            <img src={bgLogoImg} alt="" />
            <div className='absolute bottom-0'>
            <img className='' src={myImg} alt="" width={400} />
            </div>
        </div>
    </div>
  )
}

export default Home