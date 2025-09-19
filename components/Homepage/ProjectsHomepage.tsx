"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { TextGenerateEffect } from "../ui/text-generate-effect";

// Description
const description = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

// Example project data
const projects = [
  {
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    image: "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500",
    href: "https://twitter.com/mannupaaji",
  },
  {
    title: "Next.js Dashboard",
    description: "A sleek admin dashboard built with Next.js & Tailwind CSS.",
    image: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
    href: "https://github.com/vercel/next.js",
  },
  {
    title: "AI Chat App",
    description: "Realtime chat app powered by OpenAI & Supabase.",
    image: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500",
    href: "https://openai.com",
  },
];

export function AnimatedPinDemo() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto pt-8 pb-20 px-4">
        {/* Title */}
        <TextGenerateEffect
          words="Featured Projects"
          textClassName="text-4xl font-bold"
        />

        {/* Description appears after title */}
        <TextGenerateEffect
          words={description}
          delay={3}
          textClassName="text-lg font-normal max-w-3xl mt-4"
        />

        {/* Grid of projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <PinContainer key={idx} title={project.title} href={project.href}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="text-slate-100 font-bold text-base mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm flex-1">
                  {project.description}
                </p>
                <div
                  className={`flex flex-1 w-full rounded-lg mt-4 ${project.image}`}
                />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
