<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">🧊 Inventory</h1>
      <router-link
        to="/item-form"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ➕ Add Item
      </router-link>
    </div>

    <!-- Fridge Section -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-2">🧺 Fridge</h2>
      <ul>
        <li
          v-for="item in fridgeItems"
          :key="item.id"
          class="bg-white rounded p-4 mb-2 shadow flex justify-between"
        >
          <div>
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-gray-600 text-sm">Quantity: {{ item.quantity }}</p>
            <p class="text-gray-500 text-xs">Date: {{ item.date }}</p>
          </div>
          <div class="flex space-x-2">
            <router-link
              :to="`/item-form/${item.id}`"
              class="text-blue-600 hover:underline"
            >
              Edit
            </router-link>
            <button
              @click="deleteItem(item.id)"
              class="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Freezer Section -->
    <div>
      <h2 class="text-xl font-semibold mb-2">❄️ Freezer</h2>
      <ul>
        <li
          v-for="item in freezerItems"
          :key="item.id"
          class="bg-white rounded p-4 mb-2 shadow flex justify-between"
        >
          <div>
            <p class="font-semibold">{{ item.name }}</p>
            <p class="text-gray-600 text-sm">Quantity: {{ item.quantity }}</p>
            <p class="text-gray-500 text-xs">Date: {{ item.date }}</p>
          </div>
          <div class="flex space-x-2">
            <router-link
              :to="`/item-form/${item.id}`"
              class="text-blue-600 hover:underline"
            >
              Edit
            </router-link>
            <button
              @click="deleteItem(item.id)"
              class="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
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
    deleteItem(id) {
      this.fridgeItems = this.fridgeItems.filter(item => item.id !== id);
      this.freezerItems = this.freezerItems.filter(item => item.id !== id);
    }
  }
};
</script>
