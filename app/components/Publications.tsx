"use client";

import { LinkPreview } from "@/components/ui/link-preview";

export default function Publications() {
  const papers = [
    {
      title: "Efficient Compiler Design Using DFA Minimization",
      venue: "IEEE International Conference on Computing, 2024",
      year: "2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Pl-Zm9gAAAAJ&citation_for_view=Pl-Zm9gAAAAJ:qjMakFHDy7sC",
    },
    {
      title:
        "Supervised Attention Network for Arbitrary-Shaped Text Detection in Edge-Fainted Noisy Scene Images",
      venue: "IEEE Transactions on Computational Social Systems",
      year: "2021",
      link: "https://ieeexplore.ieee.org/document/9733381",
    },
    {
      title:
        "Met-MLTS: Leveraging smartphones for end-to-end spotting of multilingual oriented scene texts and traffic signs in adverse meteorological conditions",
      venue: "IEEE TRANSACTIONS ON INTELLIGENT TRANSPORTATION SYSTEMS",
      year: "Dec 10, 2021",
      link: "https://ieeexplore.ieee.org/document/9568769?denied=",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          📰 Recent Publications
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {papers.map((paper, index) => (
            <LinkPreview
              key={index}
              url={paper.link}
              className="font-bold h-full flex flex-col"
            >
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 border border-white/10 h-full flex flex-col"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {paper.title}
                </h3>
                <p className="text-gray-300 flex-grow">{paper.venue}</p>
                <p className="text-gray-400 mt-1 italic">{paper.year}</p>
              </a>
            </LinkPreview>
          ))}
        </div>
      </div>
    </section>
  );
}
