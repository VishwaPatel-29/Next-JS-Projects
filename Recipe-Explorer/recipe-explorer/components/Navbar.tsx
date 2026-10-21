import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between gap-4 bg-white px-6 py-5 shadow-sm">
      <Link href="/" className="text-xl font-bold text-orange-600">
        Recipe Explorer
      </Link>

      <div className="flex flex-wrap gap-5">
        <Link href="/">Home</Link>
        <Link href="/recipes">All Recipes</Link>
        {/* <Link href="/recipes/cuisine/east-asian">East Asian</Link> */}
        <Link href="/recipes/editor">Recipe Editor</Link>
      </div>
    </nav>
  );
}