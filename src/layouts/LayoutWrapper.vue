<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
    <Toolbar />
    <main class="p-6 max-w-5xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: 'LayoutWrapper',
  components: {
    Toolbar
  }
}
</script>
