<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">🍳 Recipe Suggestions</h2>

      <div v-if="recipes.length" class="space-y-4">
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="border rounded-lg p-4 shadow hover:bg-gray-50 transition"
        >
          <h3 class="text-xl font-semibold text-gray-800">{{ recipe.name }}</h3>
          <p class="text-sm text-gray-600 mb-2">Ingredients: {{ recipe.ingredients.join(', ') }}</p>
          <p class="text-gray-700">{{ recipe.description }}</p>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 mt-12">
        <p>No suggestions available. Try uploading a receipt first.</p>
      </div>

      <div class="mt-8 text-center">
        <button
          @click="fetchSuggestions"
          class="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Refresh Suggestions
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeSuggestionPage',
  data() {
    return {
      recipes: [], // Mock data will be loaded for now
    };
  },
  methods: {
    fetchSuggestions() {
      // Placeholder logic for simulating recipe generation
      this.recipes = [
        {
          id: 1,
          name: 'Kimchi Fried Rice',
          ingredients: ['rice', 'kimchi', 'egg'],
          description: 'A quick and spicy stir-fry dish made with leftover rice and kimchi.',
        },
        {
          id: 2,
          name: 'Soy Garlic Chicken',
          ingredients: ['chicken', 'soy sauce', 'garlic'],
          description: 'Savory and sweet chicken coated in soy garlic sauce.',
        },
      ];
    },
  },
  mounted() {
    this.fetchSuggestions();
  },
};
</script>
