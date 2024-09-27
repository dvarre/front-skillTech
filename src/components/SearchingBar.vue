<script setup lang="ts">
import {Ref, ref} from "vue";

let emit = defineEmits(['update:inputValue']);
const inputValue: Ref<String> = ref("");


const clearSearch = function (){
  inputValue.value = "";

  emit("update:inputValue", inputValue);
}
</script>

<template>
  <div class="searching-bar-container">
    <v-text-field
      v-model="inputValue"
      placeholder="Search..."
      clearable
      @click:clear="clearSearch"
      @keydown.enter="emit('update:inputValue', inputValue)"
    />
  </div>

</template>

<style scoped>

</style>