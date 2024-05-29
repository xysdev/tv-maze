<template>
  <nav>
    <div class="logo">TV Maze</div>
    <SearchBar />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
  name: 'AppNavbar',
  components: {
    SearchBar,
  },
});
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  color: #fff;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

li a {
  color: #fff;
  text-decoration: none;
}
</style>
