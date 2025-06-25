"use client";

import { LinkPreview } from "@/components/ui/link-preview";

export default function Publications() {
  const papers = [
    {
      title: "Fall-perceived action recognition of persons with neurological disorders using semantic supervision",
      venue: "IEEE International Conference on Computing, 2024",
      year: "2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Pl-Zm9gAAAAJ&citation_for_view=Pl-Zm9gAAAAJ:qjMakFHDy7sC",
    },
    {
      title:
        "Factornet: Holistic actor, object, and scene factorization for action recognition in videos",
      venue: "IEEE Transactions on Computational Social Systems",
      year: "2021",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Pl-Zm9gAAAAJ&citation_for_view=Pl-Zm9gAAAAJ:u-x6o8ySG0sC",
    },
    {
      title:
        "Emotion and gesture guided action recognition in videos using supervised deep networks",
      venue: "IEEE TRANSACTIONS ON INTELLIGENT TRANSPORTATION SYSTEMS",
      year: "Dec 10, 2021",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Pl-Zm9gAAAAJ&citation_for_view=Pl-Zm9gAAAAJ:IjCSPb-OGe4C",
    },
  ];

  return (
    <section className="pb-16 px-4 md:px-12 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          📰 Recent Publications
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {papers.map((paper, index) => (
            <LinkPreview
              key={index}
              url={paper.link}
              className="font-bold h-full flex flex-col bg-white/5 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {paper.title}
              </h3>
              <p className="text-gray-300 flex-grow">{paper.venue}</p>
              <p className="text-gray-400 mt-1 italic">{paper.year}</p>
            </LinkPreview>
          ))}
        </div>
      </div>
    </section>
  );
}
