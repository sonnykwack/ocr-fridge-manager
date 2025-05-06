<template>
    <nav class="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <router-link to="/inventory" class="text-xl font-bold text-green-600 hover:text-green-700">
        🧊 Fridge Manager
      </router-link>
  
      <div class="space-x-4 text-gray-700 font-medium text-sm">
        <router-link to="/inventory" class="hover:text-green-600 transition">Inventory</router-link>
        <router-link to="/ocr-upload" class="hover:text-green-600 transition">OCR Upload</router-link>
        <router-link to="/ocr-detail" class="hover:text-green-600 transition">Receipt Detail</router-link>
        <router-link to="/recipes" class="hover:text-green-600 transition">Recipes</router-link>
        <router-link to="/account" class="hover:text-green-600 transition">Account</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppToolbar',
  };
  </script>
  