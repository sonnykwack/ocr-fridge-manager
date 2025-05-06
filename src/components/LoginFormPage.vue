<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">🔐 Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="pt-2">
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </div>
      </form>

      <div class="mt-6 text-center text-sm text-gray-500">
        © 2025 OCR Fridge Manager. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginFormPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        // Dummy login logic
        this.$router.push('/inventory');
      } else {
        alert('Please enter valid credentials');
      }
    }
  }
};
</script>
