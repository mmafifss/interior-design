import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { CgProfile } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border">
            <h3 className="font-medium ">Admin Panel</h3>
            <CgProfile />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
