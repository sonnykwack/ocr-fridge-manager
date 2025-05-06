<template>
  <div>
    <Toolbar />
    <main class="p-6 bg-gray-50 min-h-screen">
      <router-view />
    </main>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'LayoutWrapper',
  components: {
    Toolbar,
  },
};
</script>
