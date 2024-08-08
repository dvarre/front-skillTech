<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {IUserProgression} from "../interfaces/IUserProgression.ts";

export default defineComponent({
  name: 'Course',
  props: {
    userProgression: {
      type: Object as PropType<IUserProgression>,
      required: true
    }
  }
});
</script>



<template>
  <h1>Voici le cours en question</h1>
  <div style="display: flex; flex-direction: row;">
    <v-progress-linear value="courseProgression"></v-progress-linear>
    <p>{{ userProgression.progression }}</p>
  </div>
  <h2>Section 1</h2>
  <h2>Section 2</h2>

</template>

<style scoped>

</style>