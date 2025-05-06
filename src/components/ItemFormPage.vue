<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 class="text-2xl font-bold text-blue-800 mb-6 text-center">
        {{ isEditMode ? '✏️ Edit Item' : '➕ Add New Item' }}
      </h2>
      <form @submit.prevent="saveItem" class="space-y-5">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-700 mb-1">Item Name</label>
          <input
            v-model="item.name"
            type="text"
            id="name"
            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>

        <!-- Quantity -->
        <div>
          <label for="quantity" class="block text-sm font-semibold text-gray-700 mb-1">Quantity</label>
          <input
            v-model="item.quantity"
            type="number"
            id="quantity"
            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>

        <!-- Date -->
        <div>
          <label for="date" class="block text-sm font-semibold text-gray-700 mb-1">Date</label>
          <input
            v-model="item.date"
            type="date"
            id="date"
            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>

        <!-- Type -->
        <div>
          <label for="type" class="block text-sm font-semibold text-gray-700 mb-1">Storage Type</label>
          <select
            v-model="item.type"
            id="type"
            class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            required
          >
            <option value="">Select Type</option>
            <option value="fridge">Fridge</option>
            <option value="freezer">Freezer</option>
          </select>
        </div>

        <!-- Save Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow transition duration-200 w-full"
          >
            Save
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
      item: {
        name: '',
        quantity: 1,
        date: '',
        type: '',
      }
    };
  },
  computed: {
    isEditMode() {
      return !!this.$route.params.id;
    }
  },
  mounted() {
    if (this.isEditMode) {
      const id = this.$route.params.id;
      // You can replace this mock with an API call or Vuex state
      const exampleItem = {
        id: id,
        name: 'Example Item',
        quantity: 5,
        date: '2025-05-06',
        type: 'fridge'
      };
      this.item = { ...exampleItem };
    }
  },
  methods: {
    saveItem() {
      // Replace this with real API logic
      console.log('Item saved:', this.item);
      this.$router.push('/inventory');
    }
  }
};
</script>
