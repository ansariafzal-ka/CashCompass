import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <About />
    </main>
  );
};

export default page;
