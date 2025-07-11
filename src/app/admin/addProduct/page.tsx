"use client";

import { string_to_slug } from "@/utils/slugify";
import axios from "axios";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

interface BlogFormData {
  title: string;
  excerpt: string;
  slug: string;
}

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    slug: "",
  });

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("excerpt", data.excerpt);
    formData.append("slug", string_to_slug(data.title));
    formData.append("coverImage", image);

    try {
      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(null);
        setData({ title: "", excerpt: "", slug: "" });
      } else {
        toast.error("Upload failed.");
      }
    } catch (error) {
      toast.error("An error occurred.");
      console.error(error);
    }
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16 ">
      <p className="text-xl">Upload thumbnail</p>
      <label htmlFor="image" className="cursor-pointer">
        <Image
          className="mt-4"
          src={
            image ? URL.createObjectURL(image) : "/assets/blog/upload_area.png"
          }
          alt="Thumbnail preview"
          width={140}
          height={70}
        />
      </label>
      <input
        type="file"
        id="image"
        hidden
        required
        onChange={onImageChange}
        accept="image/*"
      />

      <p className="text-xl mt-4">Blog title</p>
      <input
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        type="text"
        placeholder="Type here.."
        required
        name="title"
        value={data.title}
        onChange={onChangeHandler}
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-black"
        placeholder="write content here.."
        required
        name="excerpt"
        value={data.excerpt}
        onChange={onChangeHandler}
      />
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        Add
      </button>
    </form>
  );
};

export default Page;
