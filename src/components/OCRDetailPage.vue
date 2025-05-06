<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">🧾 OCR Receipt Details</h2>

      <div class="overflow-x-auto">
        <table class="min-w-full text-left border-collapse">
          <thead class="bg-gray-200 text-sm font-semibold">
            <tr>
              <th class="px-4 py-2">Item</th>
              <th class="px-4 py-2">Quantity</th>
              <th class="px-4 py-2">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in receiptItems"
              :key="index"
              class="border-b hover:bg-gray-50"
            >
              <td class="px-4 py-2">{{ item.name }}</td>
              <td class="px-4 py-2">{{ item.quantity }}</td>
              <td class="px-4 py-2">{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-6 flex justify-end space-x-4">
        <button
          class="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
          @click="goBack"
        >
          Cancel
        </button>
        <button
          class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          @click="confirmItems"
        >
          Confirm & Add to Inventory
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OCRDetailPage',
  data() {
    return {
      receiptItems: [
        { name: 'Milk', quantity: 2, date: '2025-05-06' },
        { name: 'Eggs', quantity: 1, date: '2025-05-05' },
        { name: 'Frozen Dumplings', quantity: 3, date: '2025-05-04' }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.push('/ocr-upload');
    },
    confirmItems() {
      // In real logic, send the data to backend here
      alert('Items confirmed and added to inventory!');
      this.$router.push('/inventory');
    }
  }
};
</script>
