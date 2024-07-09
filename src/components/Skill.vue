<script lang="ts">

export default {
  name: "Skill",
  data() {
    return {

    }
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    logo: {
      required: true,
      type: String,
    }
  },
  methods: {
    redirectToCourse(){
      this.$router.push("/courses");
    }
  }
}
</script>





<template>
  <v-card
      class="card-container"
      hover
      @click="redirectToCourse">
    <v-card-item >
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        {{ subtitle }}
      </v-card-subtitle>

    </v-card-item>
    <v-card-text class="card-text">
      <div style="display: flex; align-content: center; justify-content: center">
        <v-img class="mx-auto logo" :src="logo"></v-img>
      </div>
      <div class="description">
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>





<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}

.logo{
  width: 80px;
  height: 80px;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5em;
  max-height: calc(1.5em * 2);
  white-space: normal;
}


</style>