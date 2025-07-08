"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SlideUp } from "@/animations/animate";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const subject = encodeURIComponent(name);
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className={"max-w-[500px] mx-auto space-y-5 py-14"}>
      <motion.h1
        variants={SlideUp(0.2)}
        initial={"initial"}
        whileInView={"animate"}
        className={"text-3xl font-bold font-serif text-center"}
      >
        Contact Us, Let's Connect
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial={"initial"}
        whileInView={"animate"}
        className={"max-w-[300px] mx-auto text-gray-500 text-sm text-center"}
      >
        Stay inspired with the latest interior design trends, tips, and
        exclusive!
      </motion.p>

      {/** form */}
      <motion.div
        variants={SlideUp(0.6)}
        initial={"initial"}
        whileInView={"animate"}
        className={"flex flex-col !mt-10 justify-center "}
      >
        <input
          type={"text"}
          name={"name"}
          value={formData.name}
          onChange={handleInputChange}
          placeholder={"Enter your name..."}
          className={"px-4 py-4 ring-1 ring-gray-300 mb-5"}
        />
        <input
          type={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleInputChange}
          placeholder={"Enter your email..."}
          className={"px-4 py-4 ring-1 ring-gray-300 mb-5"}
        />
        <textarea
          name={"message"}
          value={formData.message}
          onChange={handleInputChange}
          placeholder={"Enter your message..."}
          className={"px-4 py-3 ring-1 ring-gray-300 mb-5 resize-none"}
          rows={6}
        />
        <button
          className={
            "bg-black text-white px-6 py-4 uppercase hover:bg-gray-800 transition-colors"
          }
          onClick={handleSendEmail}
        >
          send message
        </button>
      </motion.div>
    </div>
  );
}

export default Connect;
