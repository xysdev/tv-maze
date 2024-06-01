<template>
  <ShowsGrid :shows="showGeneres[genere]" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ShowsGrid from '@/layout/ShowsGrid/index.vue';
import { State } from '@/store';
import { useStore } from 'vuex';

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
    debugger;
    const store = useStore<State>();
    const showGeneres = computed(() => store.getters['shows/getShowsByGenre']);
    return {
      showGeneres,
    };
  },
});
</script>
<style scoped lang="scss"></style>
