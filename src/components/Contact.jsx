import React from "react";
import GitImg from '../assets/github-icon.svg'

function Contact() {
  return (
    <div className="flex flex-col items-center w-full h-[600px] bg-[#242424] py-14">
      <div className="flex w-8/12 h-[550px] border-b-2">
        <div className="flex flex-col w-1/2">
          <p className="text-6xl font-bold mb-10">Contact</p>
          <div className="w-4/5">
            <p className="text-xl">
              I would love to hear about your project and how I can help. Please
              fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="w-4/6">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-xl outline-none border-b-2 bg-[#242424] px-2 mb-8 focus:border-[#6C1BF0]"
            />
            <input type="email" name="" placeholder="Email"
                className="w-full text-xl outline-none border-b-2 bg-[#242424] px-2 mb-8 focus:border-[#6C1BF0]"
            />
            <textarea 
            placeholder="Message"
                className="w-full text-xl h-2/4 outline-none border-b-2 bg-[#242424] px-2 mb-8 resize-none focus:border-[#6C1BF0]"
            />
            <button className="flex underline underline-offset-8 decoration-[#6C1BF0] w-full justify-end">SEND MESSAGE</button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-8/12 mt-3'>
        <p className='text-[#ffffff] text-2xl font-extrabold'>abhishekarya</p>
            <img src={GitImg} alt="github icon" /> 
    </div>
    </div>
  );
}

export default Contact;
