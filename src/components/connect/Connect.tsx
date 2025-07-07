"use client";

import { motion } from "framer-motion";
import { SlideUp } from "@/animations/animate";

function Connect() {
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
          placeholder={"Enter your name..."}
          className={"px-4 py-4 ring-1 ring-gray-300 mb-5"}
        />
        <input
          type={"email"}
          placeholder={"Enter your email..."}
          className={"px-4 py-4 ring-1 ring-gray-300 mb-5"}
        />
        <textarea
          placeholder={"Enter your message..."}
          className={"px-4 py-3 ring-1 ring-gray-300 mb-5 resize-none"}
          rows={6}
        />
        <button className={"bg-black text-white px-6 py-4 uppercase"}>
          send message
        </button>
      </motion.div>
    </div>
  );
}

export default Connect;
