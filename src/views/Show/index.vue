<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import HeroSection from '@/components/HeroSection.vue';
import ShowSeasons from '@/components/ShowSeasons.vue';
import ShowCasts from '@/components/ShowCasts.vue';
import ShowDetails from '@/components/ShowDetails.vue';
import { Tabs, Tab } from 'vue3-tabs-component';
import { IState, ISelectedShow } from '@/interfaces';

export default defineComponent({
  name: 'Show',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    HeroSection,
    ShowSeasons,
    ShowCasts,
    ShowDetails,
    Tab,
    Tabs,
  },
  setup(props) {
    const store = useStore<IState>();
    const show = computed<ISelectedShow>(() => store.getters['shows/getselectedShow']);
    const loading = computed(() => store.getters['shows/getLoading']);
    const fetchShow = async () => {
      try {
        await store.dispatch('shows/fetchShowById', props.id);
      } catch (error) {
        console.error('Failed to load show:', error);
      }
    };
    fetchShow();

    return {
      show,
      loading,
    };
  },
});
</script>

<template>
  <div v-if="!loading">
    <HeroSection :show="show" />
    <div class="wrapper">
      <Tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
        <Tab name="Details">
          <ShowDetails :show="show" />
        </Tab>
        <Tab name="Episodes">
          <ShowSeasons :show="show" />
        </Tab>
        <Tab name="Cast">
          <ShowCasts :casts="show.casts" />
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">

.show-details-container {
  display: flex;
}

</style>
