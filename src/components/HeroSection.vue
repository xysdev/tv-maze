<template>
  <div class="hero-section" :style="heroStyle">
    <div class="wrapper">
      <div class="hero-section__summary">
        <div class="hero-section__rating-premiered">
          {{ formattedPremieredDate }}
          &#xb7;
          <span>
            <img
              class="hero-section__rating-logo"
              src="@/assets/ratings_logo.svg"
              alt="Ratings Logo"
            />
            <span>{{ show.rating?.average }}/10</span>
          </span>
        </div>
        <h3 class="hero-section__name">{{ show.name }}</h3>
        <div class="hero-section__schedule">
          <span class="hero-section__schedule-days">
            {{ show.schedule.days.join(", ") }} on {{ show.schedule.time }}
          </span>
          <span class="hero-section__schedule-genres">
            | {{ show.genres.join(" &#xb7; ") }}
          </span>
        </div>
        <p class="hero-section__show-description">
          {{ strippedSummary }}
        </p>
        <div class="hero-section__cta">
          <button class="hero-section__button">Get Started</button>
          <button class="hero-section__button">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { Show } from '@/interfaces/show';
import dateFormatter from '@/utils/dateFormatter';

export default defineComponent({
  name: 'HeroSection',
  props: {
    show: {
      type: Object as PropType<Show>,
      required: true,
    },
  },
  setup(props) {
    const heroStyle = computed(() => ({
      background: `linear-gradient(to left, transparent, black), url(${props.show?.image.original}) right top no-repeat`,
      backgroundSize: '50%',
    }));

    const formattedPremieredDate = computed(() => dateFormatter(props.show.premiered, 'en-US', { year: 'numeric', month: 'long' }));

    const strippedSummary = computed(() => props.show.summary.replace(/<[^>]*>/g, ''));

    return {
      heroStyle,
      formattedPremieredDate,
      strippedSummary,
    };
  },
});
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex-direction: column;
  height: 90vh;
  color: #fff;
  text-align: center;
  justify-content: center;
  font-size: 19px;
  line-height: 32px;

  &__summary {
    display: flex;
    flex-direction: column;
    width: 550px;
    text-align: left;
  }

  &__rating-premiered {
    color: #97a3ae;
  }

  &__name {
    font-size: 48px;
    margin-top: 17px;
    margin-bottom: 20px;
  }

  &__schedule-genre {
    color: #eef0f2;
  }

  &__show-description {
    max-height: 250px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  &__cta {
    display: flex;
    justify-content: space-around;;
    margin-top: 30px;
  }

  .hero-section__button {
    width: 161px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #e50914;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>
