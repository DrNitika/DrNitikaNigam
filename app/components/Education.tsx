"use client";
import { TimeLineEducation } from "@/components/ui/timelineEducation";
import React from "react";

const data = [
  {
    title: "2018 - 2023",
    content: (
      <div>
        <img
          src="https://imgs.search.brave.com/KsK8U9jGJ2GlIqQMTYP3hTlCZTnbDQWhSRYDEJ8vSvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWluZm9p/bmRpYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDYv/aWl0LWJodS1sb2dv/LmpwZw"
          alt="IIIT Ranchi Logo"
          className="h-40 w-auto mb-4 rounded-lg"
        />

        <h1 className="text-white text-4xl font-bold mb-2">Indian Institute of Technology (Banaras Hindu University), Varanasi
        </h1>

        <h2 className="text-gray-300 text-xl mb-2">Doctor of Philosophy - PhD, Computer science and engineering</h2>

        <p className="mb-8 text-xs font-normal text-white/70 md:text-sm dark:text-neutral-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          rerum rem, debitis sit corrupti repudiandae illo hic voluptatem
          laudantium commodi provident alias accusamus, dolor consequuntur
          reprehenderit molestiae! Officiis, iure eaque. Debitis cumque
          blanditiis deserunt cupiditate inventore eum eos itaque unde labore,
          minima ipsum excepturi repudiandae impedit culpa odit id, ipsa autem
          modi magnam! Impedit non porro saepe aspernatur culpa ipsam velit,
          suscipit qui debitis doloremque aut perspiciatis quam possimus illum
          veritatis inventore vero doloribus. Laboriosam libero officiis vitae
          magni commodi odio placeat quia rerum voluptates debitis modi ab enim
          optio accusamus ducimus deserunt consequatur natus, dolorem soluta
          nemo. Quasi, cupiditate culpa. Itaque aliquid repellat a temporibus
          eveniet, nemo assumenda placeat aperiam odio neque, ullam, eligendi
          cum pariatur iste fugit cumque id. Minima praesentium iure hic,
          delectus, sapiente sequi eos excepturi sunt rem in incidunt dolorum
          eligendi neque, atque optio aut veniam! Maxime similique nobis saepe
          labore aut molestiae facilis velit deserunt commodi aliquam, tempore
          consectetur atque ratione animi adipisci voluptates, quasi excepturi
          est quae aliquid delectus! Explicabo expedita rerum libero earum ad
          praesentium doloribus corrupti nobis dicta, autem ipsam necessitatibus
          magni! Cum, cupiditate officiis ipsum dolore beatae accusantium amet
          ullam quos soluta magni quod similique ea corporis! Quod sequi eveniet
          quisquam hic repellendus nobis delectus. Quis cumque recusandae
          praesentium minima iusto iste laborum officia necessitatibus aliquam
          esse deserunt quibusdam quae rerum quisquam, aliquid, iure amet, nemo
          id fugit. At, voluptatem? Qui nisi officiis repellendus magnam alias
          explicabo aspernatur odit molestiae doloribus. Necessitatibus
          similique quas recusandae modi sequi! Commodi, eveniet velit.
        </p>
      </div>
    ),
  },
  {
    title: "2016 - 2018",
    content: (
      <div>
        <img
          src="https://imgs.search.brave.com/4kx0H3NxPLwEsRZCM9rFts9lsZDtX08p03PhjolpLbU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/YS9hOC9NYWRhbl9N/b2hhbl9NYWxhdml5/YV9Vbml2ZXJzaXR5/X29mX1RlY2hub2xv/Z3lfbG9nby5wbmcv/MjUwcHgtTWFkYW5f/TW9oYW5fTWFsYXZp/eWFfVW5pdmVyc2l0/eV9vZl9UZWNobm9s/b2d5X2xvZ28ucG5n"
          alt="UPES"
          className="h-40 w-auto mb-4 rounded-lg"
        />

        <h1 className="text-white text-4xl font-bold mb-2">Madan Mohan Malaviya University of Technology</h1>

        <h2 className="text-gray-300 text-xl mb-2">Master of Technology - MTech, Computer Science</h2>

        <p className="mb-8 text-xs font-normal text-white/70 md:text-sm dark:text-neutral-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          rerum rem, debitis sit corrupti repudiandae illo hic voluptatem
          laudantium commodi provident alias accusamus, dolor consequuntur
          reprehenderit molestiae! Officiis, iure eaque. Debitis cumque
          blanditiis deserunt cupiditate inventore eum eos itaque unde labore,
          minima ipsum excepturi repudiandae impedit culpa odit id, ipsa autem
          modi magnam! Impedit non porro saepe aspernatur culpa ipsam velit,
          suscipit qui debitis doloremque aut perspiciatis quam possimus illum
          veritatis inventore vero doloribus. Laboriosam libero officiis vitae
          magni commodi odio placeat quia rerum voluptates debitis modi ab enim
          optio accusamus ducimus deserunt consequatur natus, dolorem soluta
          nemo. Quasi, cupiditate culpa. Itaque aliquid repellat a temporibus
          eveniet, nemo assumenda placeat aperiam odio neque, ullam, eligendi
          cum pariatur iste fugit cumque id. Minima praesentium iure hic,
          delectus, sapiente sequi eos excepturi sunt rem in incidunt dolorum
          eligendi neque, atque optio aut veniam! Maxime similique nobis saepe
          labore aut molestiae facilis velit deserunt commodi aliquam, tempore
          consectetur atque ratione animi adipisci voluptates, quasi excepturi
          est quae aliquid delectus! Explicabo expedita rerum libero earum ad
          praesentium doloribus corrupti nobis dicta, autem ipsam necessitatibus
          magni! Cum, cupiditate officiis ipsum dolore beatae accusantium amet
          ullam quos soluta magni quod similique ea corporis! Quod sequi eveniet
          quisquam hic repellendus nobis delectus. Quis cumque recusandae
          praesentium minima iusto iste laborum officia necessitatibus aliquam
          esse deserunt quibusdam quae rerum quisquam, aliquid, iure amet, nemo
          id fugit. At, voluptatem? Qui nisi officiis repellendus magnam alias
          explicabo aspernatur odit molestiae doloribus. Necessitatibus
          similique quas recusandae modi sequi! Commodi, eveniet velit.
        </p>
      </div>
    ),
  },
  {
    title: "2009 - 2013",
    content: (
      <div>
        <img
          src="https://imgs.search.brave.com/FjOFK8Hk3WlY5zP_amaUZzazqVNF8thflbbos0CW6bM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWR1c2thLmNvbS9h/c3NldHMvdXNlcl9s/b2dvL2YzMGZhMmJl/OTAwOTEzYWY5NjUw/NzY1ZjA3OGMyMDJj/LmpwZWc"
          alt="UPES"
          className="h-40 w-auto mb-4 rounded-lg"
        />

        <h1 className="text-white text-4xl font-bold mb-2">KRISHNA INSTITUTE OF ENGINEERING AND TECHNOLOGY, kanpur</h1>

        <h2 className="text-gray-300 text-xl mb-2">Bachelor of Technology - BTech, Computer Science</h2>

        <p className="mb-8 text-xs font-normal text-white/70 md:text-sm dark:text-neutral-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          rerum rem, debitis sit corrupti repudiandae illo hic voluptatem
          laudantium commodi provident alias accusamus, dolor consequuntur
          reprehenderit molestiae! Officiis, iure eaque. Debitis cumque
          blanditiis deserunt cupiditate inventore eum eos itaque unde labore,
          minima ipsum excepturi repudiandae impedit culpa odit id, ipsa autem
          modi magnam! Impedit non porro saepe aspernatur culpa ipsam velit,
          suscipit qui debitis doloremque aut perspiciatis quam possimus illum
          veritatis inventore vero doloribus. Laboriosam libero officiis vitae
          magni commodi odio placeat quia rerum voluptates debitis modi ab enim
          optio accusamus ducimus deserunt consequatur natus, dolorem soluta
          nemo. Quasi, cupiditate culpa. Itaque aliquid repellat a temporibus
          eveniet, nemo assumenda placeat aperiam odio neque, ullam, eligendi
          cum pariatur iste fugit cumque id. Minima praesentium iure hic,
          delectus, sapiente sequi eos excepturi sunt rem in incidunt dolorum
          eligendi neque, atque optio aut veniam! Maxime similique nobis saepe
          labore aut molestiae facilis velit deserunt commodi aliquam, tempore
          consectetur atque ratione animi adipisci voluptates, quasi excepturi
          est quae aliquid delectus! Explicabo expedita rerum libero earum ad
          praesentium doloribus corrupti nobis dicta, autem ipsam necessitatibus
          magni! Cum, cupiditate officiis ipsum dolore beatae accusantium amet
          ullam quos soluta magni quod similique ea corporis! Quod sequi eveniet
          quisquam hic repellendus nobis delectus. Quis cumque recusandae
          praesentium minima iusto iste laborum officia necessitatibus aliquam
          esse deserunt quibusdam quae rerum quisquam, aliquid, iure amet, nemo
          id fugit. At, voluptatem? Qui nisi officiis repellendus magnam alias
          explicabo aspernatur odit molestiae doloribus. Necessitatibus
          similique quas recusandae modi sequi! Commodi, eveniet velit.
        </p>
      </div>
    ),
  },
  {
    title: "2008 - 2009",
    content: (
      <div>
        <img
          src="https://imgs.search.brave.com/KU0KYjUC6rBXUgJmNq5sEfcs_dYk8fiBD-jL02FZNpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0sva2VuZHJp/eWEtdmlkeWFsYXlh/LXNhbmdhdGhhbi1s/b2dvLTc0QzE2MzMx/MDEtc2Vla2xvZ28u/Y29tLnBuZw"
          alt="IIIT Ranchi Logo"
          className="h-40 w-auto mb-4 rounded-lg"
        />

        <h1 className="text-white text-4xl font-bold mb-2">Kendriya Vidyalaya
        </h1>

        <h2 className="text-gray-300 text-xl mb-2">Class - XII</h2>

        <p className="mb-8 text-xs font-normal text-white/70 md:text-sm dark:text-neutral-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          rerum rem, debitis sit corrupti repudiandae illo hic voluptatem
          laudantium commodi provident alias accusamus, dolor consequuntur
          reprehenderit molestiae! Officiis, iure eaque. Debitis cumque
          blanditiis deserunt cupiditate inventore eum eos itaque unde labore,
          minima ipsum excepturi repudiandae impedit culpa odit id, ipsa autem
          modi magnam! Impedit non porro saepe aspernatur culpa ipsam velit,
          suscipit qui debitis doloremque aut perspiciatis quam possimus illum
          veritatis inventore vero doloribus. Laboriosam libero officiis vitae
          magni commodi odio placeat quia rerum voluptates debitis modi ab enim
          optio accusamus ducimus deserunt consequatur natus, dolorem soluta
          nemo. Quasi, cupiditate culpa. Itaque aliquid repellat a temporibus
          eveniet, nemo assumenda placeat aperiam odio neque, ullam, eligendi
          cum pariatur iste fugit cumque id. Minima praesentium iure hic,
          delectus, sapiente sequi eos excepturi sunt rem in incidunt dolorum
          eligendi neque, atque optio aut veniam! Maxime similique nobis saepe
          labore aut molestiae facilis velit deserunt commodi aliquam, tempore
          consectetur atque ratione animi adipisci voluptates, quasi excepturi
          est quae aliquid delectus! Explicabo expedita rerum libero earum ad
          praesentium doloribus corrupti nobis dicta, autem ipsam necessitatibus
          magni! Cum, cupiditate officiis ipsum dolore beatae accusantium amet
          ullam quos soluta magni quod similique ea corporis! Quod sequi eveniet
          quisquam hic repellendus nobis delectus. Quis cumque recusandae
          praesentium minima iusto iste laborum officia necessitatibus aliquam
          esse deserunt quibusdam quae rerum quisquam, aliquid, iure amet, nemo
          id fugit. At, voluptatem? Qui nisi officiis repellendus magnam alias
          explicabo aspernatur odit molestiae doloribus. Necessitatibus
          similique quas recusandae modi sequi! Commodi, eveniet velit.
        </p>
      </div>
    ),
  },
  {
    title: "2006 - 2007",
    content: (
      <div>
        <img
          src="https://imgs.search.brave.com/KU0KYjUC6rBXUgJmNq5sEfcs_dYk8fiBD-jL02FZNpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0sva2VuZHJp/eWEtdmlkeWFsYXlh/LXNhbmdhdGhhbi1s/b2dvLTc0QzE2MzMx/MDEtc2Vla2xvZ28u/Y29tLnBuZw"
          alt="IIIT Ranchi Logo"
          className="h-40 w-auto mb-4 rounded-lg"
        />

        <h1 className="text-white text-4xl font-bold mb-2">Kendriya Vidyalaya
        </h1>

        <h2 className="text-gray-300 text-xl mb-2">Class - X</h2>

        <p className="mb-8 text-xs font-normal text-white/70 md:text-sm dark:text-neutral-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          rerum rem, debitis sit corrupti repudiandae illo hic voluptatem
          laudantium commodi provident alias accusamus, dolor consequuntur
          reprehenderit molestiae! Officiis, iure eaque. Debitis cumque
          blanditiis deserunt cupiditate inventore eum eos itaque unde labore,
          minima ipsum excepturi repudiandae impedit culpa odit id, ipsa autem
          modi magnam! Impedit non porro saepe aspernatur culpa ipsam velit,
          suscipit qui debitis doloremque aut perspiciatis quam possimus illum
          veritatis inventore vero doloribus. Laboriosam libero officiis vitae
          magni commodi odio placeat quia rerum voluptates debitis modi ab enim
          optio accusamus ducimus deserunt consequatur natus, dolorem soluta
          nemo. Quasi, cupiditate culpa. Itaque aliquid repellat a temporibus
          eveniet, nemo assumenda placeat aperiam odio neque, ullam, eligendi
          cum pariatur iste fugit cumque id. Minima praesentium iure hic,
          delectus, sapiente sequi eos excepturi sunt rem in incidunt dolorum
          eligendi neque, atque optio aut veniam! Maxime similique nobis saepe
          labore aut molestiae facilis velit deserunt commodi aliquam, tempore
          consectetur atque ratione animi adipisci voluptates, quasi excepturi
          est quae aliquid delectus! Explicabo expedita rerum libero earum ad
          praesentium doloribus corrupti nobis dicta, autem ipsam necessitatibus
          magni! Cum, cupiditate officiis ipsum dolore beatae accusantium amet
          ullam quos soluta magni quod similique ea corporis! Quod sequi eveniet
          quisquam hic repellendus nobis delectus. Quis cumque recusandae
          praesentium minima iusto iste laborum officia necessitatibus aliquam
          esse deserunt quibusdam quae rerum quisquam, aliquid, iure amet, nemo
          id fugit. At, voluptatem? Qui nisi officiis repellendus magnam alias
          explicabo aspernatur odit molestiae doloribus. Necessitatibus
          similique quas recusandae modi sequi! Commodi, eveniet velit.
        </p>
      </div>
    ),
  },
];
export function Education() {
  return (
    <div className="w-full py-4">
      <TimeLineEducation data={data} /> 
    </div>
  );
}
