import React, { useRef, useState } from "react";
import GitImg from "../assets/github-icon.svg";
import emailjs from "@emailjs/browser";
import Header from "./Header";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // console.log(formData);
    emailjs
      .sendForm(
        "service_wyhxgic",
        "template_z4q45xd",
        form.current,
        "75pU_gFsKjWgiczC0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

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
            <form ref={form} onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Name"
                className="w-full text-xl outline-none border-b-2 bg-[#242424] px-2 mb-8 focus:border-[#6C1BF0]"
                name="from_name"
                value={formData.from_name}
                onChange={changeHandler}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full text-xl outline-none border-b-2 bg-[#242424] px-2 mb-8 focus:border-[#6C1BF0]"
                value={formData.email}
                onChange={changeHandler}
              />
              <textarea
                placeholder="Message"
                name="message"
                className="w-full text-xl h-2/4 outline-none border-b-2 bg-[#242424] px-2 mb-8 resize-none focus:border-[#6C1BF0]"
                value={formData.message}
                onChange={changeHandler}
              />
              <button
                className="flex underline underline-offset-8 decoration-[#6C1BF0] w-full justify-end"
                onClick={submitHandler}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default Contact;
