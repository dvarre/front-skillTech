<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {useCourseDashboard} from "../composition/stateCourseDashboard.ts";
import {useFetchCourses} from "../composition/dataFetcher.ts";


export default defineComponent({
  name: "CourseDashboard",
  setup(props, ctx) {
    const [skillId, skillName, redirectToCourse] = useCourseDashboard();
    const courseId: number = 5;

    const {
        loading,
        error,
        data: courses,
        fetchCourses
    } = useFetchCourses()

    onMounted(() => {
      fetchCourses()
    })

    return {
      skillId: skillId,
      skillName: skillName,
      courseId: courseId,
      redirectToCourse: redirectToCourse,

      loading,
      error,
      courses,
      fetchCourses
    }
  },
})
</script>

<template>
  <h1>Voici le cours relatif à la compétence : {{skillName}}</h1>
  <button @click="fetchCourses">Fetch les data</button>
  <div style="display: flex; flex-direction: column;">
    Ceci est censé être un composant à mettre dans un v-for pour automatiser le tout
    {{courses}}
    <v-container>
      <v-row v-for="course in courses">
        <v-col cols="12">
          <div>
            Le cours {{course.name}} a été créé par {{course.author}}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>

</style>