<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div class="w-full max-w-xl bg-white p-8 rounded-2xl shadow">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
        {{ isEditMode ? '✏️ Edit Item' : '➕ Add Item' }}
      </h2>

      <form @submit.prevent="submitForm" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            v-model.number="form.quantity"
            type="number"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Purchase Date</label>
          <input
            v-model="form.purchaseDate"
            type="date"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Storage Type</label>
          <select
            v-model="form.storage"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="fridge">Fridge</option>
            <option value="freezer">Freezer</option>
          </select>
        </div>

        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            {{ isEditMode ? 'Update Item' : 'Add Item' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemFormPage',
  data() {
    return {
      form: {
        name: '',
        quantity: 1,
        purchaseDate: '',
        storage: 'fridge'
      },
      isEditMode: false
    };
  },
  mounted() {
    const itemId = this.$route.query.id;
    if (itemId) {
      this.isEditMode = true;
      // In real case: fetch item by id and populate form
      const dummyItem = {
        id: itemId,
        name: 'Example Item',
        quantity: 3,
        purchaseDate: '2025-05-01',
        storage: 'fridge'
      };
      this.form = { ...dummyItem };
    }
  },
  methods: {
    submitForm() {
      if (this.isEditMode) {
        alert('Item updated!');
      } else {
        alert('Item added!');
      }
      this.$router.push('/inventory');
    }
  }
};
</script>
