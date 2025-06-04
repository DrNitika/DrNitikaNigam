'use client';

export default function Publications() {
  const papers = [
    {
      title: 'Efficient Compiler Design Using DFA Minimization',
      venue: 'IEEE International Conference on Computing, 2024',
      year: '2024',
      link: '#', // replace with actual DOI or PDF link
    },
    {
      title: 'Optimizing Backend Passes in LLVM for AI Workloads',
      venue: 'ACM Transactions on Architecture and Code Optimization',
      year: '2023',
      link: '#',
    },
    {
      title: 'Secure Data Flow in IoT Compilers',
      venue: 'Springer Journal of Embedded Systems, Vol. 15',
      year: '2022',
      link: '#',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          📰 Recent Publications
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <a
              key={index}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {paper.title}
              </h3>
              <p className="text-gray-300">{paper.venue}</p>
              <p className="text-gray-400 mt-1 italic">{paper.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
