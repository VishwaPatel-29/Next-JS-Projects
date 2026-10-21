import Link from "next/link";

const lessons = [
  "Introduction & Philosophy",
  "Server vs Client Components",
  "Nested Layouts & Templates",
  "Dynamic & Catch-All Routes",
  "Data Fetching & Caching",
  "Revalidation Strategies",
  "Error Boundaries & notFound()",
];

export default function LearnPage() {
  return (
    <div className="min-h-screen">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dedad3] bg-white px-6 py-4">
        <Link href="/" className="text-xl font-bold text-[#bd623d]">
          LearnSpace
        </Link>

        <div className="flex flex-wrap gap-5 text-sm">
          <Link href="/">Courses</Link>
          <Link href="/topics">Topics</Link>
          <Link href="/course">Course Overview</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 py-7 md:px-8">
        <p className="text-xs text-[#77736d]">
          Courses / Next.js App Router / Dynamic Routes
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="h-fit border border-[#dedad3] bg-white p-4">
            <h2 className="text-sm font-semibold">Course Curriculum</h2>

            <p className="mt-2 text-xs text-[#77736d]">
              Next.js App Router
            </p>

            <div className="mt-4">
              {lessons.map((lesson, index) => (
                <Link
                  key={lesson}
                  href="/learn"
                  className={`block border-b border-[#dedad3] px-2 py-3 text-xs hover:bg-[#f5e5dc]/50 ${
                    index === 3
                      ? "border-l-2 border-l-[#bd623d] bg-[#f5e5dc]/50 font-semibold"
                      : ""
                  }`}
                >
                  <span className="mr-2 text-[#bd623d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {lesson}
                </Link>
              ))}
            </div>

            <Link
              href="/course"
              className="mt-5 inline-block text-xs font-semibold text-[#bd623d]"
            >
              ← Course Overview
            </Link>
          </aside>

          <article className="min-w-0 border border-[#dedad3] bg-white p-5 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="bg-[#f5e5dc] px-2 py-1 text-xs text-[#bd623d]">
                MODULE 1 · LESSON 04
              </span>
              <span className="text-xs text-[#77736d]">
                6 min read
              </span>
            </div>

            <h1 className="mt-5 text-2xl font-bold md:text-3xl">
              Dynamic & Catch-All Routes
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#77736d]">
              Learn how Next.js handles dynamic URL segments and nested
              learning paths.
            </p>

            <hr className="my-6 border-[#dedad3]" />

            <h2 className="text-xl font-bold">Understanding Dynamic Routes</h2>

            <p className="mt-3 text-sm leading-7 text-[#77736d]">
              Dynamic routes allow pages to display different content based
              on URL parameters. In Next.js, square brackets create dynamic
              route segments.
            </p>

            <div className="mt-6 border border-[#dedad3] p-4">
              <h3 className="font-semibold">Single Dynamic Segment</h3>

              <p className="mt-2 text-sm text-[#77736d]">
                Use this pattern when the URL contains one changing value.
              </p>

              <pre className="mt-4 overflow-x-auto rounded bg-[#292723] p-4 text-sm text-[#f8eee5]">
{`app/
  courses/
    [id]/
      page.tsx`}
              </pre>
            </div>

            <div className="mt-5 border border-[#dedad3] p-4">
              <h3 className="font-semibold">Catch-All Segment</h3>

              <p className="mt-2 text-sm text-[#77736d]">
                Catch-all routes can match multiple URL segments.
              </p>

              <pre className="mt-4 overflow-x-auto rounded bg-[#292723] p-4 text-sm text-[#f8eee5]">
{`app/
  docs/
    [...slug]/
      page.tsx`}
              </pre>
            </div>

            <h2 className="mt-8 text-xl font-bold">Example Code</h2>

            <p className="mt-3 text-sm text-[#77736d]">
              This example receives a course ID from the route.
            </p>

            <pre className="mt-4 overflow-x-auto rounded bg-[#292723] p-4 text-sm text-[#f8eee5]">
{`type Props = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Course: {id}</h1>
      <p>Welcome to your course.</p>
    </main>
  );
}`}
            </pre>

            <div className="mt-6 border border-[#dedad3] bg-[#f2ece5] p-5">
              <h3 className="font-semibold">Key Takeaway</h3>

              <p className="mt-2 text-sm leading-6 text-[#77736d]">
                Dynamic segments use square brackets. Catch-all segments
                match multiple URL sections.
              </p>
            </div>

            <section className="mt-8">
              <h2 className="text-xl font-bold">Self-Assessment</h2>

              <p className="mt-2 text-sm text-[#77736d]">
                Check each statement when you understand it.
              </p>

              <div className="mt-4 space-y-4 text-sm">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[#bd623d]"
                  />
                  I understand dynamic route segments.
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[#bd623d]"
                  />
                  I can identify a catch-all route.
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[#bd623d]"
                  />
                  I can use route parameters.
                </label>
              </div>
            </section>

            <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-[#dedad3] pt-5">
              <Link
                href="/course"
                className="border border-[#dedad3] px-4 py-2 text-sm"
              >
                ← Course Overview
              </Link>

              <Link
                href="/lesson-not-found"
                className="bg-[#bd623d] px-4 py-2 text-sm text-white"
              >
                Next Lesson →
              </Link>
            </div>
          </article>
        </div>
      </main>

      <footer className="mt-8 border-t border-[#dedad3] bg-white px-6 py-5 text-xs text-[#77736d]">
        © 2026 LearnSpace Inc. · Curriculum Index
      </footer>
    </div>
  );
}