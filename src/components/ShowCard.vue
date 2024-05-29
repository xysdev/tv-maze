<template>
  <div class="movie-card">
    <img :src="image" alt="Movie Poster" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
.movie-card {
  width: 200px;
  padding: 10px;
  text-align: center;
  img{
    width: 100%;
  }
}

.movie-card img {
  width: 100%;
  height: auto;
}
</style>
