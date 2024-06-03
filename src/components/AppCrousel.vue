<script lang="ts">
import { defineComponent, PropType } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { IShow } from '@/interfaces/show';

export default defineComponent({
  name: 'CarouselComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    shows: {
      type: Array as PropType<Array<IShow>>,
      required: true,
    },
  },
});
</script>

<template>
  <Carousel :items-to-show="9">
    <Slide v-for="show in shows" :key="show.id">
      <slot :title="show.name" :image="show.image?.medium" :id="show.id"></slot>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
/* Add your styles here */
</style>
