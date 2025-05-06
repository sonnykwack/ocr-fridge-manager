<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-indigo-700 mb-8 text-center">
        🍽️ AI Recipe Suggestions
      </h2>

      <div v-if="recipes.length" class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(recipe, index) in recipes"
          :key="index"
          class="bg-white rounded-xl shadow-lg p-6 transition hover:shadow-2xl"
        >
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {{ recipe.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-4">
            {{ recipe.description }}
          </p>
          <ul class="list-disc list-inside text-sm text-gray-500">
            <li v-for="(ingredient, idx) in recipe.ingredients" :key="idx">
              {{ ingredient }}
            </li>
          </ul>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 mt-8">
        No recipes yet. Try uploading a receipt or adding inventory items.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeSuggestionPage",
  data() {
    return {
      recipes: [
        {
          title: "Cheesy Egg Toast",
          description: "A quick breakfast made from eggs and leftover cheese.",
          ingredients: ["Eggs", "Cheese", "Bread", "Salt", "Butter"]
        },
        {
          title: "Creamy Milk Pasta",
          description: "A simple creamy pasta using milk and fridge basics.",
          ingredients: ["Pasta", "Milk", "Garlic", "Pepper", "Cheese"]
        }
      ]
    };
  }
};
</script>
