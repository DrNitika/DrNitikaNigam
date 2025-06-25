"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import {
  FaEnvelope,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaGoogleScholar,
} from "react-icons/fa6";

export default function Hero() {
  const words = [
    { text: "Hi,", className: "text-white-500 dark:text-blue-500" },
    { text: "I am", className: "text-white-500 dark:text-blue-500" },
    { text: "Dr.", className: "text-blue-500 dark:text-blue-500" },
    { text: "Nitika", className: "text-blue-500 dark:text-blue-500" },
    { text: "Nigam", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <section className="flex justify-center align-center my-9 bg-transparent text-white py-16">
      <div className="w-full px-4 lg:px-20 md:px-0 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image and Socials */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/images/logo.jpeg"
              alt="My photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 text-white text-3xl">
            <a
              href="mailto:nigamnitika540@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://x.com/drnitika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=Pl-Zm9gAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleScholar className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://github.com/drnitika"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-nitika-nigam-258b1a69/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
          </div>

          {/* Sparkles and Gradient */}
          <div className="w-full h-40 relative hidden sm:block">
            {/* Gradient Lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4">
              <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
              <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            </div>
            {/* Sparkles */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={800}
              className="absolute inset-0 w-full h-full rounded-md"
              particleColor="#00ffff"
            />

            {/* Radial Gradient Mask */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        {/* Text Info */}
        <div className="text-left lg:ml-10">
          <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-bold">
            <TypewriterEffectSmooth words={words} />
          </h1>
          <p className="text-lg md:text-xl mt-2 text-blue-400 font-semibold">
            Assistant Professor, Indian Institute of Information Technology,
            Ranchi
          </p>

          <p className="mt-6 text-gray-300 max-w-2xl">
            I am an Assistant Professor at IIIT Ranchi in the Department of
            Computer Science and Engineering. My research focuses on deploying
            machine learning and deep learning systems in resource-constrained
            environments, especially mobile and edge devices. Previously, I
            served at UPES Dehradun (2023–2025) and earned my Ph.D. from IIT
            (BHU) Varanasi in 2023, specializing in video-based action
            recognition. My interests include computer vision, edge AI, and
            energy-efficient deep learning for real-world applications.
          </p>

          <div className="mt-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interests */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">📘 Interests</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span>📘</span>
                    <span>
                      Action Recognition (Constrained and Unconstrained) in
                      Videos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📘</span>
                    <span>Computer Vision (Image & Video Processing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📘</span>
                    <span>
                      Deep Learning & Lightweight Neural Architectures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📘</span>
                    <span>Hyperspectral Imaging & Analysis</span>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <div className="flex items-start gap-2">
                      <span>🎓</span>
                      <div>
                        <p className="font-semibold text-white">
                          Ph.D. in Computer Science and Engineering, 2023
                        </p>
                        <p className="text-sm text-gray-400">
                          Indian Institute of Technology (BHU), Varanasi
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span>🎓</span>
                      <div>
                        <p className="font-semibold text-white">
                          M.Tech. in Computer Science, 2018
                        </p>
                        <p className="text-sm text-gray-400">
                          Madan Mohan Malaviya University of Technology
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span>🎓</span>
                      <div>
                        <p className="font-semibold text-white">
                          B.Tech. in Computer Science, 2013
                        </p>
                        <p className="text-sm text-gray-400">
                          Krishna Institute of Technology, Kanpur
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <span>🎓</span>
                      <div>
                        <p className="font-semibold text-white">
                          Schooling, 2009
                        </p>
                        <p className="text-sm text-gray-400">
                          Kendriya Vidyalaya
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
