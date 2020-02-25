<template>
  <div class="select is-multiple">
    <label>
      <select multiple :size="size">
        <option
          v-for="(option, index) in options"
          :value="option"
          :key="index"
          >{{ option }}</option
        >
      </select>
    </label>
  </div>
</template>

<script>
import isInteger from 'lodash/isInteger';

export default {
  name: 'v-form-select-multiple',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    size: {
      type: Number,
      default: () => 5,
      validator(value) {
        return isInteger(parseInt(value));
      },
    },
  },
};
</script>

<style scoped></style>
