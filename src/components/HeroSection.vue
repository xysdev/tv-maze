<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { IShow } from '@/interfaces';
import dateFormatter from '@/utils/dateFormatter';
import sanitizeString from '@/utils/sanitizer';

export default defineComponent({
  name: 'HeroSection',
  props: {
    show: {
      type: Object as PropType<IShow>,
      required: true,
    },
  },
  setup(props) {
    const heroStyle = computed(() => ({
      backgroundImage: `linear-gradient(to left, transparent, black) , 
                          linear-gradient(to bottom, transparent, black 90%) , 
                          url(${props.show?.image?.original})`,
      backgroundSize: '50%',
      backgroundColor: '#000',
    }));

    const formattedPremieredDate = computed(() => dateFormatter(props.show.premiered, 'en-US', { year: 'numeric', month: 'long' }));

    const strippedSummary = computed(() => sanitizeString(props.show.summary));

    return {
      heroStyle,
      formattedPremieredDate,
      strippedSummary,
    };
  },
});
</script>

<template>
  <div class="hero-section">
    <div class="hero-section__background">
      <img
        class="hero-section__background-image"
        :src="show.image?.original"
        alt="Show Background"
      />
    </div>
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
          <span class="hero-section__schedule-genres"> | {{ show.genres.join(" &#xb7; ") }} </span>
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

<style scoped lang="scss">
.hero-section {
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 90vh;
  color: #fff;
  text-align: center;
  justify-content: center;
  font-size: 19px;
  background: #000;
  line-height: 32px;
  overflow: hidden;

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    z-index: 0;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(to left, transparent, black),
        linear-gradient(to bottom, transparent, black 90%);
    }
  }

  &__background-image {
    width: 100%;
    left: 0;
    top: 0;
  }

  &__summary {
    position: relative;
    z-index: 2;
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
    justify-content: space-around;
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
@include respond-to-xl {
  .hero-section {
    min-height: 50vh;

  }
}
@include respond-to-lg {
  .hero-section {
    min-height: 50vh;
  }
}
@include respond-to-md {
  .hero-section {

    &__summary {
      width: 100%;
      padding: 0 20px;
      padding-bottom:50px ;
    }
    &__background {
      position: relative;
      width: 100%;
    }
  }
}
</style>
