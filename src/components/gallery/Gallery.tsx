"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations/animate";

const images = [
  {
    src: "/assets/projects/hall-1.jpeg",
    aspect_ratio: 16 / 9,
    type: "landscape",
  },
  {
    src: "/assets/projects/hall-2.jpeg",
    aspect_ratio: 16 / 9,
    type: "landscape",
  },
  {
    src: "/assets/projects/hall-3.jpeg",
    aspect_ratio: 16 / 9,
    type: "landscape",
  },
  {
    src: "/assets/projects/hall-4.jpeg",
    aspect_ratio: 16 / 9,
    type: "landscape",
  },
  { src: "/assets/projects/cupboard-and-ladder.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/makeup-table.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/wall-table.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/kitchen-set.jpeg", aspect_ratio: 3 / 4 },
  {
    src: "/assets/projects/tv-table-2.jpeg",
    aspect_ratio: 3 / 4,
  },
  { src: "/assets/projects/backdrop-1.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/backdrop-2.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/backdrop-3.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/cupboard-1.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/cupboard-2.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/cupboard-3.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/cupboard-4.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/hall-5.jpeg", aspect_ratio: 16 / 9 },
  { src: "/assets/projects/hall-6.jpeg", aspect_ratio: 16 / 9 },
  { src: "/assets/projects/hall-7.jpeg", aspect_ratio: 16 / 9 },
  { src: "/assets/projects/hall-8.jpeg", aspect_ratio: 16 / 9 },
  { src: "/assets/projects/table-1.jpeg", aspect_ratio: 3 / 4 },
  {
    src: "/assets/projects/tv-table.jpeg",
    aspect_ratio: 3 / 4,
  },
  { src: "/assets/projects/kitchen-1.jpeg", aspect_ratio: 3 / 4 },
  { src: "/assets/projects/kitchen-2.jpeg", aspect_ratio: 3 / 4 },
];

const SimpleGallery = ({ images, showAll = false }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((image: any, index: any) => (
        <motion.div
          key={index}
          variants={SlideUp(0.1 * index)}
          initial="initial"
          whileInView="animate"
          className={`relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300 ${
            image.type === "landscape"
              ? "col-span-2 row-span-1"
              : "col-span-1 row-span-1"
          }`}
        >
          <div
            className="relative"
            style={{
              aspectRatio: image.aspect_ratio,
            }}
          >
            <img
              src={image.src}
              alt={image.alt || `Project ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const MyGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const ITEMS_PER_ROW = 4;
  const INITIAL_ROWS = 2;
  const initialItemsCount = ITEMS_PER_ROW * INITIAL_ROWS;

  const displayedImages = showAll ? images : images.slice(0, initialItemsCount);
  const hasMore = images.length > initialItemsCount;

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-3xl font-bold font-serif"
        >
          Our Project
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm"
        >
          Right design and right ideas matter a lot of in interior design
          business. a style that makes a statement.
        </motion.p>
      </div>

      <SimpleGallery images={displayedImages} showAll={showAll} />

      {hasMore && !showAll && (
        <motion.div
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate"
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            Load More
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </motion.div>
      )}

      {showAll && (
        <motion.div
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate"
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            Show Less
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default MyGallery;
