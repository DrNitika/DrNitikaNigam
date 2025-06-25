"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

const projects = [
  {
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    href: "https://twitter.com/mannupaaji",
  },
  {
    title: "RiderConnect",
    description: "Real-time ride sharing platform with Socket.io.",
    href: "https://github.com/example",
  },
  {
    title: "Portfolio Builder",
    description: "Personalized developer portfolios with ease.",
    href: "https://portfolio.com",
  },
  {
    title: "CodeSnaps",
    description: "Collaborative real-time code sharing app.",
    href: "https://codesnaps.dev",
  },
  {
    title: "BlogSphere",
    description: "Minimal blogging platform with markdown support.",
    href: "https://blogsphere.dev",
  },
  {
    title: "ChatSync",
    description: "Modern chat UI with end-to-end encryption.",
    href: "https://chatsync.app",
  },
];

export function Project() {
  return (
    <div className="w-full bg-transparent dark:bg-neutral-950 font-sans md:px-10">
      <h1 className="text-3xl md:text-7xl font-bold md:pl-20 py-10 px-5">
        Projects
      </h1>
      <div className="w-full px-2 py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <PinContainer key={index} title={project.title} href={project.href}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="!pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{project.description}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
