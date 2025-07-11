import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBookAdd, BiLogoBlogger } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image
          src={"/assets/images/logo.png"}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <BiBookAdd />
            <p>Add Blogs</p>
          </Link>
          <Link
            href="/admin/blog"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <BiLogoBlogger />
            <p>Blog List</p>
          </Link>
          <Link
            href="/admin/subscription"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <MdEmail />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
