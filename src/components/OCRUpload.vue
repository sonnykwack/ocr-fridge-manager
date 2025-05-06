<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">📷 Upload Receipt</h2>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Choose an image</label>
        <input
          type="file"
          accept="image/*"
          @change="handleFileUpload"
          class="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div v-if="previewUrl" class="mb-6 text-center">
        <img :src="previewUrl" alt="Preview" class="max-w-xs mx-auto rounded-lg shadow" />
      </div>

      <div class="flex justify-between">
        <button
          @click="reset"
          class="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
        >
          Reset
        </button>
        <button
          :disabled="!selectedFile"
          @click="submit"
          class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          Upload & Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OCRUpload',
  data() {
    return {
      selectedFile: null,
      previewUrl: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.previewUrl = URL.createObjectURL(file);
      }
    },
    reset() {
      this.selectedFile = null;
      this.previewUrl = null;
    },
    submit() {
      // This is where you'd upload the image to your backend
      alert('Uploading... (Not yet connected to backend)');
      this.$router.push('/ocr-detail');
    },
  },
};
</script>
