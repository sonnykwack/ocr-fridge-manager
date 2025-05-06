<template>
    <nav class="bg-white shadow-md px-6 py-4 rounded-b-2xl mb-6 flex justify-between items-center sticky top-0 z-50">
      <div class="text-xl font-bold text-blue-600">Fridge Manager</div>
      <div class="space-x-6">
        <router-link to="/inventory" class="text-gray-700 font-medium hover:text-blue-600 transition">Inventory</router-link>
        <router-link to="/ocr-upload" class="text-gray-700 font-medium hover:text-blue-600 transition">OCR Upload</router-link>
        <router-link to="/recipes" class="text-gray-700 font-medium hover:text-blue-600 transition">Recipes</router-link>
        <router-link to="/account" class="text-gray-700 font-medium hover:text-blue-600 transition">Account</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppToolbar'
  }
  </script>
  