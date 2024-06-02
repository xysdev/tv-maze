<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISelectedShow } from '@/interfaces';

export default defineComponent({
  name: 'ShowDetails',
  props: {
    show: {
      type: Object as PropType<ISelectedShow>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="show-details-container">
    <img :src="show.image?.medium" alt="Show image" />
    {{ show.summary }}
  </div>
</template>

<style scoped lang="scss">
.cast-list {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5rem;
  &__item {
    text-align: center;
    list-style-type: none;
    img {
      border-radius: 200px;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
}
</style>
