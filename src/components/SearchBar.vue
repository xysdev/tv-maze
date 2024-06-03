<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
});
</script>
<template>
  <div class="search-container">
    <label :for="id">
      <input
        class="search-container__search-input"
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        v-bind="$attrs"
      />
    </label>
  </div>
</template>

<style scoped lang="scss">
.search-container {
  width: 100%;

  &__search-input {
    background: #4b4e5a;
    padding: 0;
    border: none;
    outline: none;
    width: calc(100% - 100px);
    padding: 0 50px;
    height: 60px;
    font-size: 22px;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }
}
</style>
