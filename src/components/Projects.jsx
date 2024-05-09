import React from 'react'
import Project from './Project'
import data from '../Data'
import NewProject from './NewProject'

function Projects() {
  return (
    <div className='w-8/12 mt-40 mb-14'>
        <h1 className='text-7xl font-bold pb-10 underline underline-offset-8 decoration-[#6C1BF0]'>Projects</h1>
        <div className='flex w-full justify-center gap-5 flex-wrap '>

        <NewProject data={data.todo} />
        <NewProject data={data.gallery} />
        <NewProject data={data.weather} />
        <NewProject data={data.currency} />
        <NewProject data={data.randomgif} />

        </div>
    </div>
  )
}

export default Projects