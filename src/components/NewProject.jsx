import React from 'react'

function NewProject(props) {
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mb-6">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg  rounded-xl">
    <img
      src={props.data.img}
      alt="card-image" />
  </div>
  <div class="p-6">
    <h5 class="block mb-2  text-3xl font-bold leading-snug tracking-normal text-blue-gray-900">
      {props.data.title}
    </h5>
    <p className='font-semibold'>Tech Stacks -</p>
    <p class="flex justify-evenly text-sm antialiased font-medium  text-inherit">
      {
      props.data.techstack.map((skill) => (
        <p className=''>{skill} </p>
      ))
      
      }
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Click here to Visit
    </button>
  </div>
</div>  
  )
}

export default NewProject