import Link from "next/link";
import { notFound } from "next/navigation";

const recipes = [
  {
    id: "vegetable-noodles",
    name: "Vegetable Noodles",
    cuisine: "East Asian",
    time: "25 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800",
    description:
      "Delicious stir-fried noodles loaded with fresh and crunchy vegetables.",
    ingredients: [
      "Noodles",
      "Carrots",
      "Bell peppers",
      "Soy sauce",
      "Garlic",
    ],
    instructions: [
      "Boil the noodles according to package instructions.",
      "Heat oil and saute garlic with chopped vegetables.",
      "Add the noodles and soy sauce.",
      "Mix well and serve hot.",
    ],
  },
  {
    id: "creamy-pasta",
    name: "Creamy Pasta",
    cuisine: "Italian",
    time: "30 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    description:
      "Creamy pasta tossed with garlic, herbs, and a delicious cheese sauce.",
    ingredients: [
      "Pasta",
      "Fresh cream",
      "Garlic",
      "Parmesan cheese",
      "Italian herbs",
    ],
    instructions: [
      "Boil the pasta until tender.",
      "Saute chopped garlic in butter.",
      "Add cream, cheese, and herbs.",
      "Mix in the pasta and serve warm.",
    ],
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    cuisine: "Italian",
    time: "35 mins",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
    description:
      "A classic Italian pizza topped with tomato sauce, mozzarella, and basil.",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
    ],
    instructions: [
      "Preheat the oven to 220°C.",
      "Spread tomato sauce over the pizza dough.",
      "Add mozzarella cheese and fresh basil.",
      "Bake until the crust is golden and the cheese melts.",
    ],
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    cuisine: "Indian",
    time: "35 mins",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    description:
      "Soft paneer cubes cooked in a rich, creamy, and flavorful tomato gravy.",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Fresh cream",
      "Garam masala",
    ],
    instructions: [
      "Cook tomatoes with spices until soft.",
      "Blend the mixture into a smooth gravy.",
      "Add butter, cream, and paneer cubes.",
      "Simmer for a few minutes and serve with naan or rice.",
    ],
  },
  {
    id: "vegetable-biryani",
    name: "Vegetable Biryani",
    cuisine: "Indian",
    time: "45 mins",
    difficulty: "Medium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp55Ch5LQXHhDIrZoGSSGP6vEVamb439cEjLegA85F26aQQgqmfsdEBo&s",
    description:
      "Fragrant basmati rice layered with vegetables and aromatic Indian spices.",
    ingredients: [
      "Basmati rice",
      "Mixed vegetables",
      "Yogurt",
      "Biryani masala",
      "Fresh mint",
    ],
    instructions: [
      "Wash and partially cook the basmati rice.",
      "Cook the vegetables with spices and yogurt.",
      "Layer the rice and vegetable mixture in a pot.",
      "Cover and cook until the rice is fluffy and aromatic.",
    ],
  },
  {
    id: "classic-burger",
    name: "Classic Veg Burger",
    cuisine: "American",
    time: "25 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    description:
      "A delicious burger with a crispy vegetable patty and fresh toppings.",
    ingredients: [
      "Burger buns",
      "Vegetable patties",
      "Lettuce",
      "Tomatoes",
      "Cheese",
    ],
    instructions: [
      "Cook the vegetable patties until golden.",
      "Lightly toast the burger buns.",
      "Layer lettuce, tomato, patty, and cheese.",
      "Add your favorite sauce and serve.",
    ],
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    cuisine: "Mediterranean",
    time: "15 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    description:
      "A refreshing salad with crunchy vegetables, olives, and feta cheese.",
    ingredients: [
      "Cucumber",
      "Tomatoes",
      "Olives",
      "Feta cheese",
      "Olive oil",
    ],
    instructions: [
      "Wash and chop the cucumber and tomatoes.",
      "Add olives and crumbled feta cheese.",
      "Drizzle with olive oil and lemon juice.",
      "Toss gently and serve fresh.",
    ],
  },
  {
    id: "chocolate-brownies",
    name: "Chocolate Brownies",
    cuisine: "Dessert",
    time: "40 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
    description:
      "Rich, fudgy chocolate brownies that are perfect for dessert lovers.",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Sugar",
      "Flour",
      "Eggs",
    ],
    instructions: [
      "Melt the chocolate and butter together.",
      "Mix in the sugar, eggs, and flour.",
      "Pour the batter into a lined baking pan.",
      "Bake until set, cool completely, and slice.",
    ],
  },
  {
    id: "thai-green-curry",
    name: "Thai Green Curry",
    cuisine: "Thai",
    time: "35 mins",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    description:
      "A fragrant coconut curry with vegetables and delicious Thai-inspired flavors.",
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Broccoli",
      "Bell peppers",
      "Tofu",
    ],
    instructions: [
      "Heat the green curry paste in a pan.",
      "Add coconut milk and stir well.",
      "Add tofu and chopped vegetables.",
      "Simmer until the vegetables are tender and serve with rice.",
    ],
  },
  {
    id: "pancakes",
    name: "Fluffy Pancakes",
    cuisine: "Breakfast",
    time: "20 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    description:
      "Soft and fluffy golden pancakes for a perfect breakfast.",
    ingredients: [
      "All-purpose flour",
      "Milk",
      "Egg",
      "Sugar",
      "Baking powder",
    ],
    instructions: [
      "Mix the flour, sugar, and baking powder.",
      "Whisk in milk and egg to make a smooth batter.",
      "Pour small portions onto a warm pan.",
      "Flip when bubbles appear and cook until golden.",
    ],
  },
  {
    id: "mexican-tacos",
    name: "Mexican Veg Tacos",
    cuisine: "Mexican",
    time: "25 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
    description:
      "Colorful tacos filled with seasoned vegetables, beans, and fresh salsa.",
    ingredients: [
      "Taco shells",
      "Beans",
      "Bell peppers",
      "Tomatoes",
      "Cheese",
    ],
    instructions: [
      "Saute beans and vegetables with taco seasoning.",
      "Warm the taco shells.",
      "Fill each shell with the vegetable mixture.",
      "Top with salsa and cheese before serving.",
    ],
  },
  {
    id: "mango-smoothie",
    name: "Mango Smoothie",
    cuisine: "Beverage",
    time: "10 mins",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800",
    description:
      "A refreshing and creamy mango smoothie made with ripe mangoes.",
    ingredients: [
      "Ripe mango",
      "Milk",
      "Yogurt",
      "Honey",
      "Ice cubes",
    ],
    instructions: [
      "Peel and chop the ripe mango.",
      "Add mango, milk, yogurt, and honey to a blender.",
      "Blend until smooth and creamy.",
      "Serve chilled.",
    ],
  },
];

type Recipe = (typeof recipes)[number];

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            {recipe.cuisine}
          </span>

          <span className="text-sm text-gray-500">{recipe.time}</span>
        </div>

        <h2 className="text-xl font-bold text-gray-800 transition group-hover:text-orange-600">
          {recipe.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {recipe.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {recipe.difficulty}
          </span>

          <span className="font-semibold text-orange-600">
            View Recipe →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function RecipesPage({ params }: PageProps) {
  const { slug = [] } = await params;

  // /recipes
  if (slug.length === 0) {
    return (
      <main className="min-h-screen bg-orange-50 px-5 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-orange-600">
              Your Kitchen Inspiration
            </p>

            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
              Explore Our Recipes
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover simple, delicious recipes from around the world
              and find your next favorite meal.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                "All Recipes",
                "Indian",
                "Italian",
                "East Asian",
                "American",
                "Mediterranean",
                "Thai",
                "Mexican",
                "Breakfast",
                "Dessert",
                "Beverage",
              ].map((cuisine) => (
                <Link
                  key={cuisine}
                  href={
                    cuisine === "All Recipes"
                      ? "/recipes"
                      : `/recipes/cuisine/${cuisine.toLowerCase().replaceAll(" ", "-")}`
                  }
                  className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {cuisine}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              All Recipes
            </h2>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              {recipes.length} Recipes
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // /recipes/cuisine/indian
  if (slug.length === 2 && slug[0] === "cuisine") {
    const selectedCuisine = slug[1].replaceAll("-", " ");

    const filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
    );

    if (filteredRecipes.length === 0) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-orange-50 px-5 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/recipes"
            className="font-semibold text-orange-600 hover:text-orange-800"
          >
            ← All Recipes
          </Link>

          <div className="my-8">
            <p className="font-semibold uppercase tracking-widest text-orange-600">
              Explore by Cuisine
            </p>

            <h1 className="mt-2 text-4xl font-extrabold capitalize text-gray-900">
              {selectedCuisine} Recipes
            </h1>

            <p className="mt-3 text-gray-600">
              Discover delicious {selectedCuisine} dishes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // /recipes/vegetable-noodles
  if (slug.length === 1) {
    const recipe = recipes.find((item) => item.id === slug[0]);

    if (!recipe) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-orange-50 px-5 py-10 md:px-10">
        <article className="mx-auto max-w-5xl">
          <Link
            href="/recipes"
            className="font-semibold text-orange-600 hover:text-orange-800"
          >
            ← Back to All Recipes
          </Link>

          <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-72 w-full object-cover sm:h-96"
            />

            <div className="p-6 md:p-10">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                {recipe.cuisine}
              </span>

              <h1 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-5xl">
                {recipe.name}
              </h1>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                {recipe.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-xl bg-orange-50 px-4 py-3 text-gray-700">
                  <strong>⏱ Time:</strong> {recipe.time}
                </span>

                <span className="rounded-xl bg-orange-50 px-4 py-3 text-gray-700">
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </span>
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ingredients
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {recipe.ingredients.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-1 text-orange-500">✓</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Instructions
                  </h2>

                  <ol className="mt-5 space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li
                        key={instruction}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        <span className="pt-1 leading-6">
                          {instruction}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <div className="mt-10 border-t border-orange-100 pt-6">
                <Link
                  href="/recipes"
                  className="inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Explore More Recipes →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  }

  // Unknown routes return the custom 404 page.
  notFound();
}