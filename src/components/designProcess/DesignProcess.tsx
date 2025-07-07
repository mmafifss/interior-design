"use client";

import React from "react";
import { FaLightbulb, FaRuler, FaPalette, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations/animate";

const InteriorDesignProcess = () => {
  const processes = [
    {
      id: "01",
      title: "Consultation & Brief",
      icon: <FaLightbulb className="w-8 h-8" />,
      description:
        "Initial client meeting to understand needs, lifestyle, budget, and project scope",
      delay: 0.2,
    },
    {
      id: "02",
      title: "Concept Development",
      icon: <FaRuler className="w-8 h-8" />,
      description:
        "Space planning, mood boards, and design concept creation based on client requirements",
      delay: 0.4,
    },
    {
      id: "03",
      title: "Design Refinement",
      icon: <FaPalette className="w-8 h-8" />,
      description:
        "Material selection, color schemes, furniture specification, and detailed design development",
      delay: 0.6,
    },
    {
      id: "04",
      title: "Implementation",
      icon: <FaHome className="w-8 h-8" />,
      description:
        "Project management, procurement, installation, and final styling of the completed space",
      delay: 0.8,
    },
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            variants={SlideUp(0.2)}
            initial={"initial"}
            animate={"animate"}
            className={"text-3xl font-bold font-serif  text-white mb-4"}
          >
            Our Process
          </motion.h1>
          <div className="w-16 h-0.5 bg-[#d9d9d9] mx-auto"></div>
        </div>

        {/* Process Cards and Numbers */}
        <div className="relative">
          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                variants={SlideUp(process.delay)}
                initial={"initial"}
                whileInView={"animate"}
                className="relative"
              >
                {/* Card */}
                <div className="bg-gray-800 border text-white border-gray-700 p-8 rounded-md text-center hover:bg-gray-750 transition-all duration-300 group hover:bg-white hover:text-black">
                  <div className="mb-6 flex justify-center">{process.icon}</div>
                  <h3 className="text-xl font-medium tracking-wider mb-4 border-b border-gray-600 pb-2 ">
                    {process.title}
                  </h3>
                  <p className="text-xs leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Vertical Connector Line from Card to Number */}
                <div className="absolute -bottom-4 left-1/2 transform translate-y-12 w-0.5 h-16 bg-[#d9d9d9]" />
              </motion.div>
            ))}
          </div>

          {/* Process Numbers */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#d9d9d9] transform -translate-y-1/2"></div>

            {/* Number Circles */}
            <div className="grid grid-cols-4 gap-8 relative">
              {processes.map((process) => (
                <div key={process.id} className="flex justify-center">
                  <div className="w-16 h-16 bg-gray-900 border-2 border-[#d9d9d9] rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {process.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
            Our comprehensive interior design process ensures every project is
            executed with precision, creativity, and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignProcess;
