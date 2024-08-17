import SideBar from "@/components/utils/SideBar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full h-[calc(100vh-61px)] bg-gray-100">
      <div className="h-full w-full flex">
        <SideBar />
        <div className="w-full px-6 py-3">{children}</div>
      </div>
    </main>
  );
};

export default layout;
