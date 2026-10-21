import Link from "next/link";

const topics = [
  {
    title: "Next.js App Router Fundamentals",
    level: "Intermediate",
    lessons: 14,
    description:
      "Master nested layouts, routing, server components and dynamic segments.",
  },
  {
    title: "Modern State Management",
    level: "Intermediate",
    lessons: 10,
    description:
      "Explore state machines, reactive signals and component rendering.",
  },
  {
    title: "React Server Components",
    level: "Advanced",
    lessons: 8,
    description:
      "Understand server rendering and client-server component boundaries.",
  },
  {
    title: "Enterprise Monorepo Architecture",
    level: "Advanced",
    lessons: 12,
    description:
      "Build scalable and maintainable frontend application systems.",
  },
];

const relatedPaths = [
  {
    title: "Frontend Architecture",
    description: "Design systems, testing and frontend structure.",
  },
  {
    title: "Distributed Web",
    description: "Caching, server rendering and distributed systems.",
  },
  {
    title: "TypeScript Deep Dive",
    description: "Advanced types and reusable programming patterns.",
  },
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dedad3] bg-white px-6 py-4">
        <Link href="/" className="text-xl font-bold text-[#bd623d]">
          LearnSpace
        </Link>

        <input
          placeholder="Search curriculum..."
          className="w-full rounded border border-[#dedad3] px-3 py-2 text-sm outline-none focus:border-[#bd623d] sm:w-64"
        />

        <div className="flex gap-5 text-sm">
          <Link href="/">Courses</Link>
          <Link href="/topics" className="font-semibold text-[#bd623d]">
            Topics
          </Link>
          <a href="#about">About</a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <p className="mb-5 text-xs text-[#77736d]">
          <Link href="/">Courses</Link> / Topics / Frontend / React
        </p>

        <section className="border border-[#dedad3] bg-white p-6 md:p-8">
          <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
            SPECIALIZED LEARNING PATH
          </span>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            React & Next.js Ecosystem
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#77736d]">
            Explore component architecture, state management, server rendering,
            and modern frontend development.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-5 border-t border-[#dedad3] pt-6 md:grid-cols-4">
            {[
              ["Total Content", "44 Lessons"],
              ["Difficulty", "Intermediate to Advanced"],
              ["Core Skills", "React, Routing, SSR"],
              ["Verification", "Peer Reviewed"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-[#77736d]">{label}</p>
                <p className="mt-1 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 flex flex-wrap gap-2">
          {[
            "All React",
            "Server Components",
            "State & Signals",
            "Routing Architecture",
          ].map((filter, index) => (
            <button
              key={filter}
              className={`border px-3 py-2 text-xs ${
                index === 0
                  ? "border-[#bd623d] bg-[#f5e5dc] text-[#bd623d]"
                  : "border-[#dedad3] bg-white hover:border-[#bd623d]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="border border-[#dedad3] bg-white p-5 hover:border-[#bd623d]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
                  Module {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-[#77736d]">
                  {topic.level}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-semibold">{topic.title}</h2>

              <p className="mt-3 text-sm leading-6 text-[#77736d]">
                {topic.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#dedad3] pt-4">
                <span className="text-xs text-[#77736d]">
                  {topic.lessons} Lessons
                </span>

                <Link
                  href="/course"
                  className="text-xs font-semibold text-[#bd623d]"
                >
                  View Course →
                </Link>
              </div>

              <Link
                href="/learn"
                className="mt-4 inline-block bg-[#bd623d] px-4 py-2 text-xs text-white hover:bg-[#a65030]"
              >
                Start Topic
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related Learning Paths</h2>

          <p className="mt-2 text-sm text-[#77736d]">
            Explore adjacent topics to expand your skills.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedPaths.map((path) => (
              <Link
                href="/topics"
                key={path.title}
                className="border border-[#dedad3] bg-white p-5 hover:border-[#bd623d]"
              >
                <h3 className="font-semibold">{path.title}</h3>
                <p className="my-3 text-sm text-[#77736d]">
                  {path.description}
                </p>
                <span className="text-xs font-semibold text-[#bd623d]">
                  Explore Path →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="about"
        className="mt-10 border-t border-[#dedad3] bg-white px-6 py-5 text-xs text-[#77736d]"
      >
        © 2026 LearnSpace Inc. · Documentation · Curriculum Index
      </footer>
    </div>
  );
}