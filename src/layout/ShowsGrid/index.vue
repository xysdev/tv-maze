<template>
  <div class="wrapper">
    <div v-if="shows" class="shows-grid">
        <ShowCard
          v-for="show in shows"
          :key="show.id"
          :image="show.image.medium"
          :title="show.name"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShowCard from '@/components/ShowCard.vue';
import { Show } from '@/interfaces/show';

export default defineComponent({
  name: 'ShowsGrid',
  props: {
    shows: {
      type: Array as () => Show[] | undefined,
      required: true,
    },
  },
  components: {
    ShowCard,
  },
});
</script>

<style scoped lang="scss">
.shows-grid {
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
