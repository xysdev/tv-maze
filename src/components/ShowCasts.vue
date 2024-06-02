<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IActor } from '@/interfaces';

export default defineComponent({
  name: 'ShowCasts',
  props: {
    casts: {
      type: Object as PropType<IActor[]>,
      required: true,
    },
  },
});
</script>

<template>
  <ul class="cast-list">
    <li class="cast-list__item" v-for="cast in casts" :key="cast.person.id">
      <img :src="cast.person.image?.medium" alt="Cast image" />
      <div>
        <h3>{{ cast.person.name }}</h3>
        <span> as {{ cast.character.name }}</span>
      </div>
    </li>
  </ul>
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
