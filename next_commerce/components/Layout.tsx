"use client";
import React from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pb-10">
      <div className="app-shell">
        <Header />
      </div>
      <main className="app-shell mt-6">{children}</main>
    </div>
  );
};

export default Layout;
