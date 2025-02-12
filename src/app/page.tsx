
import Hero from "./Hero/page";
import About from "./About/page";
import WhatIDo from "./WhatIDo/page";
import CreativeWorks from "./CreativeWorks/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";


export default function Home() {
  return (
    <div>
      <header></header>
      <Hero></Hero>
      {/* Add mt-[70px] to create space for the fixed navbar */}
      <main className="bg-[#181c30] mt-[70px]"> 
        <About/>
        <WhatIDo></WhatIDo>
        <CreativeWorks></CreativeWorks>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}
