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
  data() {
    return {
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        1400: {
          itemsToShow: 6,
          snapAlign: 'center',
        },
        1800: {
          itemsToShow: 8,
          snapAlign: 'start',
        },
        // 1920 and up
        1920: {
          itemsToShow: 12,
          snapAlign: 'start',
        },
      },
    };
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
  <Carousel :breakpoints="breakpoints" :mouseDrag="false">
    <Slide v-for="show in shows" :key="show.id">
      <slot :title="show.name" :image="show.image?.medium" :id="show.id"></slot>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
