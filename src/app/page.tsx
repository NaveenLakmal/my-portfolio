import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import CreativeWorks from "./components/CreativeWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <header><NavBar></NavBar></header>
      <Hero ></Hero>
      <main className="bg-[#181c30]">
        
        <About/>
        <WhatIDo></WhatIDo>
        <CreativeWorks></CreativeWorks>
        <Contact></Contact>
        <Footer></Footer>
        
      </main>
    </div>
  );
}
