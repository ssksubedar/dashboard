"use client";
import { cn } from "@/libs/utils";
import React from "react";

// Define a type for the props
type props = {
  showSidebar: boolean;
};

const Sidebar = ({ showSidebar }: props) => {
  return (
    <div
      className={cn(
        "fixed left-0 bottom-0 h-screen bg-green-300",
        showSidebar ? "w-56 px-6" : "w-8 p-1"
      )}
    >
      <div className="flex flex-col justify-between h-screen">
        <div>Top</div>
        <div className="border-t-2">test@gmail.com</div>
      </div>
    </div>
  );
};

export default Sidebar;
