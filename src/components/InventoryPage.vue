<template>
  <div class="p-6 bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen">
    <div class="max-w-5xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-blue-800">🧊 Inventory</h1>
        <router-link
          to="/item-form"
          class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow transition duration-200"
        >
          ➕ Add Item
        </router-link>
      </div>

      <!-- Fridge Section -->
      <div class="mb-10">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">🧺 Fridge</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="item in fridgeItems"
            :key="item.id"
            class="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition"
          >
            <div class="flex justify-between items-start">
              <div>
                <p class="text-lg font-bold text-gray-800">{{ item.name }}</p>
                <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
                <p class="text-xs text-gray-500">Date: {{ item.date }}</p>
              </div>
              <div class="flex flex-col space-y-2 text-sm text-right">
                <button
                  @click="editItem(item)"
                  class="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id)"
                  class="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Freezer Section -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">❄️ Freezer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="item in freezerItems"
            :key="item.id"
            class="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition"
          >
            <div class="flex justify-between items-start">
              <div>
                <p class="text-lg font-bold text-gray-800">{{ item.name }}</p>
                <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
                <p class="text-xs text-gray-500">Date: {{ item.date }}</p>
              </div>
              <div class="flex flex-col space-y-2 text-sm text-right">
                <button
                  @click="editItem(item)"
                  class="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  @click="deleteItem(item.id)"
                  class="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryPage",
  data() {
    return {
      fridgeItems: [
        { id: 1, name: "Milk", quantity: 2, date: "2025-05-01" },
        { id: 2, name: "Eggs", quantity: 12, date: "2025-05-03" }
      ],
      freezerItems: [
        { id: 3, name: "Frozen Dumplings", quantity: 1, date: "2025-04-25" },
        { id: 4, name: "Ice Cream", quantity: 2, date: "2025-04-30" }
      ]
    };
  },
  methods: {
    editItem(item) {
      this.$router.push({ name: "EditItem", params: { id: item.id } });
    },
    deleteItem(id) {
      this.fridgeItems = this.fridgeItems.filter(item => item.id !== id);
      this.freezerItems = this.freezerItems.filter(item => item.id !== id);
    }
  }
};
</script>
