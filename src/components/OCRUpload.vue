<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 class="text-2xl font-bold text-blue-800 mb-6 text-center">🧾 Upload Receipt</h2>

      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Upload Area -->
        <div class="border-2 border-dashed border-blue-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-blue-50 transition">
          <label for="file-upload" class="cursor-pointer">
            <p class="text-gray-500 mb-2">Drag and drop a receipt image or</p>
            <p class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">Browse Files</p>
            <input id="file-upload" type="file" class="hidden" @change="handleFileUpload" />
          </label>
        </div>

        <!-- File Name -->
        <div v-if="file" class="text-center text-sm text-gray-600">
          Selected: <span class="font-medium">{{ file.name }}</span>
        </div>

        <!-- Submit -->
        <div class="pt-2">
          <button
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl shadow transition"
          >
            Upload & Process
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OCRUpload',
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    submitForm() {
      if (!this.file) {
        alert('Please select a file first.');
        return;
      }
      // Placeholder for actual OCR API logic
      alert(`Processing: ${this.file.name}`);
      this.$router.push('/ocr-detail');
    }
  }
};
</script>
