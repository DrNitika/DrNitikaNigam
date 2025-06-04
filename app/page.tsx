"use client";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from "@/components/ui/button";
// import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Publications from "./components/Publications";

const Page = () => {
  return (
    <PageComponent className="bg-black relative w-screen h-screen bg-black text-white overflow-hidden">
      {/* Background Lines */}
      <BackgroundLines className="bgline bg-black absolute inset-0 z-0 pointer-events-none" />
      <Navbar />
      <Hero />
      <Publications />
    </PageComponent>
  );
};

const PageComponent = styled.div`
  background: black;
  position: absolute;
  z-index: -1000;

  .bgline{
    height: 100vh;
    width: 100%;
    z-index: -999;
  }
`;

export default Page;