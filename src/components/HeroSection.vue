<template>
  <div class="hero">
    <h1>Unlimited movies, TV shows, and more.</h1>
    <p>Watch anywhere. Cancel anytime.</p>
    <button>Get Started</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSection',
});
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  /* background: url("path-to-hero-image.jpg") center/cover no-repeat; */
  color: #fff;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #e50914;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
