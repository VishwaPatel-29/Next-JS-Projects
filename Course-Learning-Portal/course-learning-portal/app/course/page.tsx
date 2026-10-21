import Link from "next/link";

const modules = [
  {
    title: "Routing Architecture & File Conventions",
    lessons: [
      "Introduction & Philosophy",
      "Server vs Client Components",
      "Nested Layouts & Templates",
      "Dynamic & Catch-All Routes",
    ],
  },
  {
    title: "Data Fetching & Caching",
    lessons: [
      "Server-Side Fetching",
      "Revalidation Strategies",
      "Parallel & Intercepting Routes",
    ],
  },
  {
    title: "Mutation & Boundary Handling",
    lessons: [
      "Server Actions & Forms",
      "Error Boundaries & notFound()",
      "Loading States & Suspense",
    ],
  },
  {
    title: "Deployment & Optimization",
    lessons: [
      "Metadata & OpenGraph",
      "Static Rendering",
      "Production Build",
    ],
  },
];

export default function CoursePage() {
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
          <Link href="/topics">Topics</Link>
          <a href="#about">About</a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <p className="mb-5 text-xs text-[#77736d]">
          <Link href="/">Courses</Link> / Next.js App Router Fundamentals
        </p>

        <section className="border border-[#dedad3] bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
              Intermediate
            </span>
            <span className="text-xs text-[#77736d]">
              14 Lessons · Estimated 3.5 Hours
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Next.js App Router Fundamentals
          </h1>

          <p className="mt-3 text-sm text-[#77736d]">
            ♙ Alex Rivera · Senior Platform Architect
          </p>

          <p className="mt-5 max-w-3xl leading-7 text-[#77736d]">
            Master server components, streaming SSR, nested routing layouts,
            catch-all parameters, and route interceptors in modern web
            applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn"
              className="bg-[#bd623d] px-5 py-3 text-sm text-white hover:bg-[#a65030]"
            >
              Start Learning →
            </Link>

            <a
              href="#syllabus"
              className="border border-[#dedad3] px-5 py-3 text-sm hover:border-[#bd623d]"
            >
              View Syllabus
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#dedad3] pt-6 md:grid-cols-4">
            {[
              ["Course Content", "4 Modules"],
              ["Total Lessons", "14 Lessons"],
              ["Duration", "3.5 Hours"],
              ["Difficulty", "Intermediate"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-[#77736d]">{label}</p>
                <p className="mt-1 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="syllabus" className="mt-10">
          <h2 className="text-2xl font-bold">Course Curriculum</h2>
          <p className="mt-2 text-sm text-[#77736d]">
            Explore the modules and start learning at your own pace.
          </p>

          {modules.map((module, index) => (
            <div
              key={module.title}
              className="mt-5 border border-[#dedad3] bg-white"
            >
              <div className="p-5">
                <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
                  Module {index + 1}
                </span>

                <h3 className="mt-3 font-semibold">{module.title}</h3>

                <p className="mt-1 text-xs text-[#77736d]">
                  {module.lessons.length} Lessons · Self-paced
                </p>
              </div>

              {module.lessons.map((lesson, lessonIndex) => (
                <Link
                  href="/learn"
                  key={lesson}
                  className="flex items-center justify-between gap-3 border-t border-[#dedad3] px-5 py-4 text-sm hover:bg-[#f5e5dc]/40"
                >
                  <span>
                    <span className="mr-3 text-xs text-[#77736d]">
                      {String(lessonIndex + 1).padStart(2, "0")}
                    </span>
                    {lesson}
                  </span>

                  <span className="shrink-0 text-xs text-[#bd623d]">
                    Start →
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-[#dedad3] bg-[#f2ece5] p-5">
          <div>
            <h3 className="font-semibold">Ready to start learning?</h3>
            <p className="text-sm text-[#77736d]">
              Begin with the first lesson in the curriculum.
            </p>
          </div>

          <Link
            href="/learn"
            className="bg-[#bd623d] px-5 py-3 text-sm text-white"
          >
            Start Learning
          </Link>
        </div>
      </main>

      <footer
        id="about"
        className="mt-10 border-t border-[#dedad3] bg-white px-6 py-5 text-xs text-[#77736d]"
      >
        © 2026 LearnSpace Inc. · Curriculum Index · Privacy · Terms
      </footer>
    </div>
  );
}