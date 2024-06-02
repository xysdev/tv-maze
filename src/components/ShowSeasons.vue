<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';
import { ISelectedShow } from '@/interfaces';

export default defineComponent({
  name: 'ShowSeasons',
  props: {
    show: {
      type: Object as PropType<ISelectedShow>,
      required: true,
    },
  },
  setup() {
    const selectedSeasonIndex = ref(0);

    return {
      selectedSeasonIndex,
    };
  },
});
</script>

<template>
  <!-- TODO : Implement DropDown component -->
  <label for="seasons">
    Seasons
    <select id="seasons" v-model="selectedSeasonIndex">
      <option v-for="(season, index) in show.seasons" :key="season.season" :value="index">
        Season {{ season.season }}
      </option>
    </select>
  </label>
  <ul class="episode-list">
    <li
      class="episode-list__item"
      v-for="episode in show.seasons[selectedSeasonIndex].episodes"
      :key="episode.id"
    >
      <img :src="episode.image?.medium" alt="Episode image" />
      <div>
        <h3>{{ episode.name }}</h3>
        <p>{{ episode.summary }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.episode-list {
  padding: 0;
  &__item {
    display: flex;
    padding: 20px 0;
    border-bottom: 2px solid #cacaca;
    &:last-child {
      border-bottom: none;
    }
    img {
      object-fit: cover;
      margin-right: 20px;
    }
    h3 {
      margin: 0;
    }
  }
}
</style>
