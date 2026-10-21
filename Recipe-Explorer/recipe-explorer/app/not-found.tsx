import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center">
      <p className="text-7xl font-bold text-orange-500">404</p>

      <h1 className="mt-4 text-2xl font-bold">
        Recipe Not Found
      </h1>

      <p className="mt-2 text-gray-500">
        Sorry, we couldn't find that recipe.
      </p>

      <Link
        href="/recipes"
        className="mt-6 rounded-lg bg-orange-500 px-5 py-3 text-white"
      >
        Explore Recipes
      </Link>
    </main>
  );
}
