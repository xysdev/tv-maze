<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import 'vue3-carousel/dist/carousel.css';
import ShowCard from '@/components/ShowCard.vue';
import { IShow } from '@/interfaces';
import AppCrousel from '@/components/AppCrousel.vue';

export default defineComponent({
  name: 'GenreSelection',
  components: {
    ShowCard,
    AppCrousel,
    RouterLink,
  },
  props: {
    shows: {
      type: Array as PropType<Array<IShow>>,
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

<template>
  <div v-if="shows.length > 12" class="genre-section">
    <div class="genre-section__header">
      <h3>{{ title }}</h3>
      <RouterLink :to="`/generes/${title}`">Explore All</RouterLink>
    </div>
    <AppCrousel :shows="shows">
      <template #default="{ title, image, id }">
        <ShowCard :title="title" :image="image" :id="id" />
      </template>
    </AppCrousel>
  </div>
</template>

<style scoped lang="scss">
.genre-section {

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 0 50px;

    a {
      background-color: transparent;
      font-size: 18px;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      text-decoration: none;
    }
    h3 {
      margin: 0;
      font-size: 20px;
    }
  }
}
</style>
