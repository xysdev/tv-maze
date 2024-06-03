<template>
  <div class="movie-card">
    <RouterLink :to="`/shows/${id}`">
      <div>
        <img :src="image" alt="Movie Poster" />
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'ShowCard',
  components: {
    RouterLink,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: undefined,
    },
  },
});
</script>

<style scoped lang="scss">
.movie-card {
  width: 200px;
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
