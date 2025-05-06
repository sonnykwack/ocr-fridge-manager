<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
    <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
      <h2 class="text-2xl font-bold text-blue-800 mb-6 text-center">📋 OCR Receipt Details</h2>

      <!-- Item List -->
      <div v-if="items.length > 0" class="space-y-4">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-4 flex justify-between items-center"
        >
          <div>
            <p class="font-semibold text-gray-800">{{ item.name }}</p>
            <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
            <p class="text-xs text-gray-500">Date: {{ item.date }}</p>
          </div>
          <button
            @click="addToInventory(item)"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>

      <!-- No Items -->
      <div v-else class="text-center text-gray-500 mt-8">
        No items extracted. Please upload a valid receipt first.
      </div>

      <!-- Go Back -->
      <div class="mt-10 text-center">
        <router-link
          to="/ocr-upload"
          class="text-blue-600 hover:underline text-sm"
        >
          ⬅️ Back to Upload
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OCRDetailPage",
  data() {
    return {
      items: [
        { name: "Milk", quantity: 2, date: "2025-05-01" },
        { name: "Bread", quantity: 1, date: "2025-05-02" },
        { name: "Eggs", quantity: 12, date: "2025-05-03" }
      ]
    };
  },
  methods: {
    addToInventory(item) {
      // Placeholder logic
      alert(`Added ${item.name} to inventory.`);
      this.$router.push("/inventory");
    }
  }
};
</script>
