<template>
  <div class="navbar">
    <div class="navbar__logo-nav">
      <div class="navbar__logo"><router-link to="/">TV Maze </router-link></div>
      <nav aria-label="Primary navigation">
        <ul class="navbar__navlist">
          <li>
            <router-link to="/">Home </router-link>
          </li>
          <li>
            <router-link to="#">Generes</router-link>
            <ul>
              <li v-for="(title, key) in showGenre" :key="key">
                <router-link :to="'/generes/' + title">{{ title }}</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/shows/all">All Shows </router-link></li>
        </ul>
      </nav>
    </div>
    <router-link class="navbar__search" to="/search">
      <img src="@/assets/magnifying_icon.svg" alt="search" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import showGenre from '@/utils/showGeneres';

export default defineComponent({
  name: 'Navbar',
  setup() {
    return {
      showGenre,
    };
  },
});
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;

  &__logo-nav {
    display: flex;

    nav {
      display: flex;
      align-items: center;
      background-color: transparent;
      color: #fff;

      ul {
        list-style: none;
        display: flex;
        margin: 0;
        gap: 1rem;

        li {
          cursor: pointer;
          position: relative;

          &:hover,
          &:focus-within {
            background: red;
            display: block;

            ul {
              display: block;
            }
          }

          ul {
            display: none;
            position: absolute;
            padding: 0;
            top: 51px;
            left: 0;
            z-index: 10;
            background: #191a23;
            white-space: nowrap;
          }

          a {
            color: #fff;
            text-decoration: none;
            padding: 1rem;
            display: block;
          }
        }
      }
    }
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 50px;
    margin-right: 80px;
    line-height: 51px;

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  &__search {
    width: 25px;
    text-align: center;
    display: flex;
    padding: 15px;
    img {
      width: 100%;
    }
  }
}
@include respond-to-md {
  .navbar {
    position: relative;
    &__logo {
      margin-left: 20px;
      margin-right: 20px;
    }
    /// TODO: Add media query for navbar
    &__logo-nav {
      nav {
        display: none;
      }
    }
  }
}
</style>
