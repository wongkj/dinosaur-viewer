import React from "react";
import { Navbar } from "../_components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto px-4">
        <Navbar />
        {children}
      </div>
    </>
  );
}
