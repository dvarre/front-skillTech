<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: false,
      default: 1
    },
    totalElements: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      page: this.currentPage,
      nbElementsPerPage: this.pageSize,
    }
  },
  methods: {
    updatePage() {
      this.$emit("updatePage", this.page, this.nbElementsPerPage);
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalElements / this.nbElementsPerPage);
    }
  },
  watch: {
    page(value) {
      this.$emit('updatePage', value, this.nbElementsPerPage);
    },
    nbElementsPerPage(value) {
      this.page = 1;
      this.$emit('updatePage', this.page, value);
    }
  }
})
</script>

<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            v-model current page = {{currentPage}}
            <v-pagination
                v-model="page"
                :length="totalPages"
                rounded="circle"
                total-visible="8"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>