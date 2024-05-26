"use client";

import { cn } from "@/libs/utils";
import { AlignJustify, Bell, Moon } from "lucide-react";
import React, { useState } from "react";

type props = {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
};

const Topbar = ({ showSidebar, setShowSidebar }: props) => {
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  };
  return (
    <div
      className={cn(
        "fixed z-50 right-0 bg-violet-100",
        showSidebar ? "w-[calc(100%-14rem)]" : "w-[calc(100%-2rem)]"
      )}
    >
      <div className="flex items-center justify-between py-3 px-4">
        <button onClick={toggleSidebar}>
          <AlignJustify />
        </button>
        <div className="flex items-center gap-2">
          <Bell />
          <Moon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
