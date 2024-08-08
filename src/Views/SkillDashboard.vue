<script lang="ts">
  export default {
    name: "SkillDashboard",
  }
</script>

<script setup lang="ts">
import router from "../routes.ts";
import { SkillInterface } from "../interfaces/SkillInterface.ts";
import Skill from "../components/Skill.vue";


const skillList: SkillInterface[] = [
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

const redirectToCourseDashboard = function(skillId: number) : void {
  router.push({ path: '/courseDashboard/' + skillId });
}

</script>

<template>
  <!-- Ajouter la navbar -->
  <!-- Ajouter la searching bar -->

  <v-container>
    <div style="display: flex;justify-content: center; text-align: center;">
      <v-row cols="4">
        <v-col v-for="skill in skillList" :key="skill.id">
          <Skill
              :id="skill.id"
              :title=skill.name
              :subtitle=skill.subtitle
              :description="skill.description"
              :logo=skill.logoPath
              @click="redirectToCourseDashboard(skill.id)"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>

  <!-- Ajouter la pagination -->

</template>

<style scoped>

</style>