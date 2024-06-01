<template>
  <div class="movie-card">
    <router-link :to="route">
      <div>
        <img :src="image" alt="Movie Poster" />
        <h3>{{ title }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShowCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.movie-card {
  width: 200px;
  padding: 10px;
  text-align: center;
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
}

.movie-card img {
  width: 100%;
  height: auto;
}
</style>
