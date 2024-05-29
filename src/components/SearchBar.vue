<template>
  <label for="searchbar" class="search-container">
      <img src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="Search" />
    <input id="searchbar" type="text" placeholder="Search..." />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
});
</script>

<style scoped>
.search-container {
  background: #fff;
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 25px;
  padding: 5px;
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
    background: transparent;
  }
}

.search-container .search-container button {
  background: none;
  border: none;
  cursor: pointer;
}

.search-container button img {
  width: 20px;
  height: 20px;
}
</style>
