import React from "react";
import { useNavigate } from "react-router-dom";

function NewProject(props) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mb-6">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg  rounded-xl">
        <img src={props.data.img} alt="card-image" />
      </div>
      <div className="p-6">
        <h5 className="block mb-2  text-3xl font-bold leading-snug tracking-normal text-blue-gray-900">
          {props.data.title}
        </h5>
        <p className="font-semibold">Tech Stacks -</p>
        <p className="flex justify-evenly text-sm antialiased font-medium  text-inherit">
          {props.data.techstack.map((skill, index) => (
            <span className="" key={index}>
              {skill}{" "}
            </span>
          ))}
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          href={props.data.website}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
          type="button"
        >
          Click here to Visit
        </a>
      </div>
    </div>
  );
}

export default NewProject;
