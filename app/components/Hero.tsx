'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex justify-center align-center my-9 bg-transparent text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/images/logo.jpeg" 
            alt="My photo"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Dr. Nitika Nigam
          </h1>
          <p className="text-lg md:text-xl mt-2 text-blue-400 font-semibold">
            Researcher (2024–2025), Indian Institute of Technology (BHU) Varanasi
          </p>

          <p className="mt-6 text-gray-300 max-w-2xl">
            Hello! I’m a passionate researcher and engineer with a strong academic foundation and keen interest in computer science. I enjoy exploring new technologies and solving real-world problems through innovation and research.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">📚 Education</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Ph.D. – IIT (Indian Institute of Technology) – 2018</li>
              <li>M.Tech – Madan Mohan Malaviya University of Technology – 2016–2018</li>
              <li>B.Tech – Krishna Institute of Technology, Kanpur – 2009–2013</li>
              <li>Schooling – Kendriya Vidyalaya – 2005–2009</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
