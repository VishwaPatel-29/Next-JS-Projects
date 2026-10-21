import Link from "next/link";

const courses = [
  {
    category: "Frontend",
    title: "Next.js App Router Fundamentals",
    level: "Intermediate",
    teacher: "Alex Rivera",
    lessons: 14,
    description:
      "Learn server components, routing, layouts and streaming.",
  },
  {
    category: "Language",
    title: "TypeScript Enterprise Patterns",
    level: "Advanced",
    teacher: "Maya Lin",
    lessons: 18,
    description:
      "Explore types, generics and reliable application patterns.",
  },
  {
    category: "Architecture",
    title: "Distributed Cache Architecture",
    level: "Advanced",
    teacher: "Elena Vance",
    lessons: 12,
    description:
      "Learn caching, distributed systems and system design.",
  },
  {
    category: "Frontend",
    title: "Modern State Management",
    level: "Intermediate",
    teacher: "Aarav Mehta",
    lessons: 10,
    description:
      "Understand state, signals and reactive interfaces.",
  },
  {
    category: "Backend",
    title: "RESTful API Design",
    level: "Beginner",
    teacher: "Marcus Chen",
    lessons: 8,
    description:
      "Build clean APIs and understand HTTP fundamentals.",
  },
  {
    category: "Database",
    title: "Database Indexing",
    level: "Intermediate",
    teacher: "Tariq Ali",
    lessons: 16,
    description:
      "Learn indexes, query performance and optimization.",
  },
];

const categories = [
  "All Courses",
  "Frontend",
  "Backend",
  "Architecture",
  "Fundamentals",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dedad3] bg-white px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-bold text-[#bd623d]">
          LearnSpace
        </Link>

        <input
          placeholder="⌕ Search syllabus or topics..."
          className="w-full rounded border border-[#dedad3] px-3 py-2 text-sm outline-none focus:border-[#bd623d] sm:w-64"
        />

        <div className="flex items-center gap-5 text-sm">
          <Link href="/" className="text-[#bd623d]">
            Courses
          </Link>
          <Link href="/topics" className="hover:text-[#bd623d]">
            Topics
          </Link>
          <a href="#about" className="hover:text-[#bd623d]">
            About
          </a>
        </div>

        <Link
          href="/course"
          className="rounded bg-[#bd623d] px-4 py-2 text-sm text-white hover:bg-[#a65030]"
        >
          Sign In
        </Link>
      </nav>

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <p className="mb-4 text-xs text-[#77736d]">
          Index / Courses
        </p>

        <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
          CURRICULUM DIRECTORY 2026
        </span>

        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Explore courses
        </h1>

        <p className="mt-2 text-sm text-[#77736d]">
          Browse curriculum modules, system design paths, and full-stack
          development tracks.
        </p>

        <div className="my-6 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`border px-3 py-2 text-xs ${
                index === 0
                  ? "border-[#bd623d] bg-[#bd623d] text-white"
                  : "border-[#dedad3] bg-white hover:border-[#bd623d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 border-y border-[#dedad3] bg-white p-4 md:grid-cols-4">
          {[
            ["Published Tracks", "6 Core Units"],
            ["Interactive Syllabus", "78 Lessons"],
            ["Evaluation Mode", "Peer Review"],
            ["Status", "Live Cohort"],
          ].map(([label, value]) => (
            <div key={label} className="border-r border-[#dedad3] px-2">
              <p className="text-xs text-[#77736d]">{label}</p>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded border border-[#dedad3] bg-white p-4 hover:border-[#bd623d]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
                  {course.category}
                </span>
                <span className="border border-[#dedad3] px-2 py-1 text-xs">
                  {course.level}
                </span>
              </div>

              <h2 className="mt-4 font-semibold">{course.title}</h2>

              <p className="mt-2 text-xs text-[#77736d]">
                ♙ {course.teacher}
              </p>

              <p className="mt-4 min-h-10 text-sm text-[#77736d]">
                {course.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-[#dedad3] pt-3">
                <span className="text-xs text-[#77736d]">
                  ▤ {course.lessons} Lessons
                </span>
                <Link
                  href="/course"
                  className="text-xs font-semibold text-[#bd623d] hover:underline"
                >
                  View course →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 border border-[#dedad3] bg-[#f2ece5] p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold">
              Curriculum Sequencing Engine
            </h2>
            <p className="mt-1 text-sm text-[#77736d]">
              Follow a structured learning path and master each prerequisite.
            </p>
          </div>

          <Link
            href="/topics"
            className="w-fit border border-[#dedad3] bg-white px-4 py-2 text-sm hover:border-[#bd623d]"
          >
            Browse Topic Map →
          </Link>
        </div>
      </main>

      <footer
        id="about"
        className="flex flex-wrap justify-between gap-3 border-t border-[#dedad3] bg-white px-6 py-5 text-xs text-[#77736d]"
      >
        <span>© 2026 LearnSpace Inc. Minimal learning for everyone.</span>
        <span>Documentation · Curriculum Index · Privacy · Terms</span>
      </footer>
    </div>
  );
}