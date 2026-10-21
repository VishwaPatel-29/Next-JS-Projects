export default function RecipeEditorPage() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Recipe Editor</h1>
      <p className="mt-2 text-gray-500">
        Add your recipe details below.
      </p>

      <form className="mt-6 space-y-4">
        <input
          placeholder="Recipe name"
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="Recipe category"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Ingredients and instructions"
          className="w-full rounded-lg border p-3"
          rows={5}
        />

        <button
          type="button"
          className="rounded-lg bg-orange-600 px-5 py-3 text-white"
        >
          Save Recipe
        </button>
      </form>
    </main>
  );
}