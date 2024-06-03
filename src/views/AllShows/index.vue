<template>
  <div v-if="!loading">
    <ShowsGrid :shows="shows" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { IShow, IState } from '@/interfaces';
import ShowsGrid from '@/layout/ShowsGrid/index.vue';

export default defineComponent({
  name: 'AllShows',
  components: {
    ShowsGrid,
  },
  setup() {
    const store = useStore<IState>();
    const shows = computed<IShow[]>(() => store.getters['shows/getShows']);
    const loading = computed<boolean>(() => store.getters['shows/getLoading']);

    return {
      loading,
      shows,
    };
  },
});
</script>
