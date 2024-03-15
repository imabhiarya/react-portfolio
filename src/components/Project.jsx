import React from "react";

function Project(props) {
  const data = props.data;
  return (
    <div className="w-full rounded bg-[#D9D9D9] m-1">
      <div className=" w-[100%] h-[90%]">
        <img
          src={data.img}
          alt=""
          className="rounded object-cover w-full"
        />
        <div className="mt-2">
          <p className="uppercase text-xl font-medium">{data.title}</p>
          <div className="flex flex-wrap justify-between pt-2 w-8/12">
            {data.techstack.map((tech) => (
              <p className="text-lg">{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
