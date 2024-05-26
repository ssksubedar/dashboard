"use client"
import Bottombar from "@/components/Bottombar";
import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
   
  return (
    <main className="w-full h-full">
      <Sidebar showSidebar={showSidebar} />
      <div>
      <Topbar 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}

        />
      <Content showSidebar={showSidebar}/>
      <Bottombar showSidebar={showSidebar} />
      </div>
    </main>
  );
}
