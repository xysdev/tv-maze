<template>
  <ShowsGrid :shows="showGeneres[genere]" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ShowsGrid from '@/layout/ShowsGrid/index.vue';
import { useStore } from 'vuex';
import { IState } from '@/interfaces';

export default defineComponent({
  name: 'Generes',
  components: {
    ShowsGrid,
  },
  props: {
    genere: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore<IState>();
    const showGeneres = computed(() => store.getters['shows/getShowsByGenre']);
    return {
      showGeneres,
    };
  },
});
</script>
<style scoped lang="scss"></style>
