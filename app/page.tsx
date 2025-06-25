"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import "./components/style.css";
import Contact from "./components/Contact";
import { Project } from "./components/Project";
import { Talks } from "./components/Talks";
import { News } from "./components/News";

const Page = () => {
  return (
    <PageComponent id="home" className="bg-black relative w-screen h-screen bg-black text-white">
      {/* Background Lines */}
      <BackgroundLines className="bgline bg-black absolute inset-0 z-0 pointer-events-none fixed" />
      <Navbar />
      <Hero />
      <div id="pub">
        <Publications />
      </div>
      <div id="exp">
        <Experience />
      </div>
      <div id="pro">
        <Project />
      </div>
      <div id="talks">
        <Talks />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </PageComponent>
  );
};

const PageComponent = styled.div`
  background: black;
  position: absolute;
  z-index: -1000;
  overflow-x: hidden;

  .bgline {
    height: 100vh;
    width: 100%;
    z-index: -999;
  }
`;

export default Page;
