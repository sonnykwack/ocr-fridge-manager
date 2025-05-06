<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Account Settings</h2>

      <!-- User Info -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">👤 User Information</h3>
        <div class="space-y-2 text-gray-600">
          <p><span class="font-medium">Username:</span> fridge_user</p>
          <p><span class="font-medium">Email:</span> fridge@example.com</p>
        </div>
      </div>

      <!-- Preferences -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">⚙️ Preferences</h3>
        <div class="flex items-center justify-between mb-4">
          <span class="text-gray-700">Dark Mode</span>
          <input type="checkbox" v-model="darkMode" class="toggle-checkbox" />
        </div>
        <div class="flex items-center justify-between">
          <span class="text-gray-700">Notifications</span>
          <input type="checkbox" v-model="notifications" class="toggle-checkbox" />
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-6">
        <button
          class="w-full py-2 px-4 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
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
  name: 'AccountPage',
  data() {
    return {
      darkMode: false,
      notifications: true
    };
  },
  methods: {
    logout() {
      alert("Logged out!");
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.toggle-checkbox {
  width: 42px;
  height: 22px;
  appearance: none;
  background: #ccc;
  border-radius: 9999px;
  position: relative;
  transition: all 0.3s ease;
}
.toggle-checkbox:checked {
  background: #3b82f6;
}
.toggle-checkbox::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 9999px;
  transition: all 0.3s ease;
}
.toggle-checkbox:checked::before {
  transform: translateX(20px);
}
</style>
