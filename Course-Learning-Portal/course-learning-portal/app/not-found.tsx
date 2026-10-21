import Link from "next/link";

const suggestions = [
  {
    number: "01",
    title: "Introduction & Philosophy",
    description: "Course foundation and setup",
  },
  {
    number: "02",
    title: "Server vs Client Components",
    description: "Understanding component boundaries",
  },
  {
    number: "03",
    title: "Nested Layouts & Templates",
    description: "Organizing application routes",
  },
  {
    number: "04",
    title: "Dynamic & Catch-All Routes",
    description: "URL segments and parameters",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dedad3] bg-white px-6 py-4">
        <Link href="/" className="text-xl font-bold text-[#bd623d]">
          LearnSpace
        </Link>

        <input
          placeholder="Search lessons or topics..."
          className="w-full rounded border border-[#dedad3] px-3 py-2 text-sm outline-none focus:border-[#bd623d] sm:w-64"
        />

        <div className="flex gap-5 text-sm">
          <Link href="/">Courses</Link>
          <Link href="/topics">Topics</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-5 py-12">
        <p className="mb-6 text-xs text-[#77736d]">
          Courses / Next.js App Router / Unresolved Lesson
        </p>

        <section className="border border-[#dedad3] bg-white p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="bg-[#f5e5dc] px-3 py-1 text-xs text-[#bd623d]">
              404 · UNRESOLVED LESSON ROUTE
            </span>

            <span className="border border-[#dedad3] px-2 py-1 text-xs">
              HTTP 404
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold">Lesson not found</h1>

          <p className="mt-3 text-sm leading-7 text-[#77736d]">
            The lesson or learning module you requested could not be located
            in this curriculum track. It may have been moved, or the lesson
            link may be incorrect.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/course"
              className="bg-[#bd623d] px-4 py-3 text-sm text-white hover:bg-[#a65030]"
            >
              ← Return to Course
            </Link>

            <Link
              href="/"
              className="border border-[#dedad3] px-4 py-3 text-sm hover:border-[#bd623d]"
            >
              Browse All Courses
            </Link>
          </div>

          <hr className="my-7 border-[#dedad3]" />

          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold">
              Suggested alternative lessons
            </h2>

            <span className="text-xs text-[#77736d]">
              4 Lessons Available
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {suggestions.map((lesson) => (
              <Link
                key={lesson.number}
                href="/learn"
                className="border border-[#dedad3] p-4 hover:border-[#bd623d] hover:bg-[#f5e5dc]/30"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs text-[#bd623d]">
                    {lesson.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {lesson.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#77736d]">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-7 border border-[#dedad3] bg-[#f2ece5] p-4">
            <h3 className="font-semibold">Diagnostic Information</h3>

            <p className="mt-2 text-sm text-[#77736d]">
              HTTP 404 — The requested learning resource could not be found.
            </p>
          </div>
        </section>

        <p className="mt-5 text-center text-xs text-[#77736d]">
          Curriculum Track: Next.js App Router Fundamentals
        </p>
      </main>

      <footer className="border-t border-[#dedad3] bg-white px-6 py-5 text-xs text-[#77736d]">
        © 2026 LearnSpace Inc. · Documentation · Curriculum Index
      </footer>
    </div>
  );
}