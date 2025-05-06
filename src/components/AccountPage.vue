<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
    <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 class="text-3xl font-bold mb-6 text-center text-indigo-700">👤 Account Settings</h2>

      <!-- User Info -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-2 text-gray-800">User Information</h3>
        <p class="text-gray-600"><span class="font-medium">Username:</span> fridge_user</p>
        <p class="text-gray-600"><span class="font-medium">Email:</span> fridge@example.com</p>
      </div>

      <!-- Preferences -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-2 text-gray-800">Preferences</h3>
        <div class="flex justify-between items-center mb-3">
          <span class="text-gray-700">Dark Mode</span>
          <input type="checkbox" v-model="darkMode" class="form-checkbox h-5 w-5 text-indigo-600">
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-700">Notifications</span>
          <input type="checkbox" v-model="notifications" class="form-checkbox h-5 w-5 text-indigo-600">
        </div>
      </div>

      <!-- Logout -->
      <div>
        <button
          class="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow transition"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountPage",
  data() {
    return {
      darkMode: false,
      notifications: true
    };
  },
  methods: {
    logout() {
      alert("Logged out!");
      this.$router.push("/login");
    }
  }
};
</script>
