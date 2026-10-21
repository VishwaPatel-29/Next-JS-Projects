import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[75vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-medium text-orange-600">
        YOUR NEXT FAVORITE MEAL
      </p>

      <h1 className="mt-4 text-4xl font-bold md:text-6xl">
        Discover Delicious Recipes
      </h1>

      <p className="mt-4 text-gray-500">
        Simple recipes for everyday cooking.
      </p>

      <Link
        href="/recipes"
        className="mt-8 rounded-lg bg-orange-500 px-6 py-3 text-white"
      >
        Explore Recipes →
      </Link>
    </main>
  );
}