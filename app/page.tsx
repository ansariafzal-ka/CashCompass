import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <About />
      <FAQ />
    </main>
  );
};

export default page;
