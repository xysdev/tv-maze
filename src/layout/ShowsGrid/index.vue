<script lang="ts">
import { defineComponent } from 'vue';
import ShowCard from '@/components/ShowCard.vue';
import { IShow } from '@/interfaces';

export default defineComponent({
  name: 'ShowsGrid',
  props: {
    shows: {
      type: Array as () => IShow[],
      required: true,
    },
  },
  components: {
    ShowCard,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="shows-grid">
        <ShowCard
          v-for="show in shows"
          :key="show.id"
          :id = "show.id"
          :image="show.image?.medium"
          :title="show.name"
        />
    </div>
  </div>
</template>

<style scoped lang="scss">
.shows-grid {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
