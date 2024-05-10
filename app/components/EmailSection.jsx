'use client'

import React, { useState } from "react";
import GitHubIcon from "../../public/images/icons/github-icon.svg";
import LinkedInIcon from "../../public/images/icons/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 lg:my-12 sm:my-0 py-24 gap-4 sm:py-0"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {" "}
          Interested in learning more about my journey or connecting over shared
          tech interests? Reach out via email or connect with me on LinkedIn to
          exchange ideas and explore potential collaboration opportunities.
          Dont forget to check out my GitHub for the latest projects showcasing
          my passion for web and software development and innovative solutions.
          Lets connect and build a stronger network together!
        </p>
        <div className="socials flex flex-row  gap-2">
          <Link href="https://github.com/giovannibraaga" target="_blank">
            <Image width={40} height={40} src={GitHubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/giovannibraga/"
            target="_blank"
          >
            <Image
              width={40}
              height={40}
              src={LinkedInIcon}
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>

      <div className="mb-6">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                E-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#3f464f] border mb-4 border-[#2d353f] placeholder:-[#3f464f] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="youremail@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#3f464f] border border-[#2d353f] placeholder:-[#3f464f] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just say hi!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#3f464f] border border-[#2d353f] placeholder:-[#3f464f] text-gray-100 text-sm rounded-lg block w-full p-2.5 resize-none"
                placeholder="Type your message here."
                rows="10"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message!
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
