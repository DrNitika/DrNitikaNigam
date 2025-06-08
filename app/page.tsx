"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import "./components/style.css";
import { Education } from "./components/Education";
import Contact from "./components/Contact";

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
      <div id="edu">
        <Education />
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
