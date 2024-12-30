import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";


export default function Home() {
  return (
    <div>
      <header><NavBar></NavBar></header>
      <main>
        <Hero></Hero>
        <About/>
        <WhatIDo></WhatIDo>
      </main>
    </div>
  );
}
