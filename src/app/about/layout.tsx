import React from "react";
import { Navbar } from "../_components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto px-10 sm:px-40 py-10">{children}</div>
    </>
  );
}
