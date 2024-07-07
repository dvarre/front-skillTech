<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Skill from "./components/Skill.vue";

interface Skill {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  logoPath: string;
}

const skillList: Skill[] = [] = [
  {id:1, name: "Java", description: "Formation pour préparer l'obtention de l'OCA", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:2, name: "Vue", description: "Formation pour découvrir pas à pas VueJs", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:3, name: "Angular", description: "Formation pour découvrir pas à pas Angular", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:4, name: "Gestion de projet", description: "Apprendre les fondamentaux de la gestion de projet", subtitle: "Soft skills", logoPath: "src/assets/logos/java.png"},
  {id:5, name: "Spring core", description: "Comprendre spring core pour comprendre spring", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:6, name: "Maven", description: "Facilitez vous la gestion de dépendances", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:7, name: "JDBC Template", description: "Apprennez à connecter facilement vos projets à une BDD", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:8, name: "React", description: "Plongez à la découverte d'une librairie front end époustoufflante", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
  {id:9, name: "Plus d'inspiration", description: "Je n'ai plus d'inspiration inspiration ekojsjlnwclelnwlnelkcwlnen lkelwkjkl lkew lkcj lwejc wleaù aùx aù xùe", subtitle: "Informatique", logoPath: "src/assets/logos/java.png"},
]
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <v-container>
    <div style="display: flex;justify-content: center; text-align: center;">
      <v-row cols="4">
        <v-col v-for="skill in skillList" :key="skill.id">
          <Skill
              :title=skill.name
              :subtitle=skill.subtitle
              :description="skill.description"
              :logo=skill.logoPath
          />
        </v-col>
      </v-row>
    </div>
  </v-container>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
