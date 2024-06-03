<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { IShow, IState } from '@/interfaces';
import SearchBar from '@/components/SearchBar.vue';
import ShowsGrid from '@/layout/ShowsGrid/index.vue';
import { debounce } from '@/utils/debounce';

export default defineComponent({
  name: 'Search',
  components: {
    SearchBar,
    ShowsGrid,
  },

  setup() {
    const store = useStore<IState>();
    const searchQuery = ref('');
    const shows = computed<IShow[]>(() => store.getters['shows/getSearchResults']);
    const loading = computed<boolean>(() => store.getters['shows/getLoading']);

    const fetchSearchResults = debounce(async () => {
      if (searchQuery.value.length >= 3) {
        await store.dispatch('shows/fetchSearchResults', searchQuery.value);
      }
    }, 500);

    const search = (event: Event) => {
      const target = event.target as HTMLInputElement;
      searchQuery.value = target.value;
      fetchSearchResults();
    };
    return {
      searchQuery,
      search,
      shows,
      loading,
    };
  },
});
</script>

<template>
  <div class="search-container">
    <div>
      <SearchBar
        :id="'search'"
        :model-value="searchQuery"
        @input="search"
        placeholder="Search by title"
      />
    </div>
    <div v-if="loading">
      <ShowsGrid :shows="shows" />
    </div>
    <div v-else class="no-results">
      <h3>No Search Results ...</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.no-results {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84vh;
}
</style>
