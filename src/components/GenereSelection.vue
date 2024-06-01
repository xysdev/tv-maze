<template>
  <div>
    <div class="genre-section-header">
      <h3>{{ title }}</h3>
      <button @click="navigateToGenre">Show more</button>
    </div>
    <AppCrousel :shows="shows">
      <template #default="{ title, image, id }">
        <ShowCard :title="title" :image="image" :id="id" />
      </template>
    </AppCrousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import 'vue3-carousel/dist/carousel.css';
import ShowCard from '@/components/ShowCard.vue';
import { Show } from '@/interfaces/show';
import AppCrousel from './AppCrousel.vue';

export default defineComponent({
  name: 'GenreSelection',
  components: {
    ShowCard,
    AppCrousel,
  },
  props: {
    shows: {
      type: Array as PropType<Array<Show>>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const navigateToGenre = () => {
      router.push({ name: 'GenrePage', params: { genre: props.title } });
    };

    return {
      navigateToGenre,
    };
  },
});
</script>

<style scoped>
.genre-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
