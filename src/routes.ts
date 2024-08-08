import {createRouter, createWebHistory} from "vue-router";
import SkillDashboard from "./Views/SkillDashboard.vue";
import CourseDashboard from "./Views/CourseDashboard.vue";
import Course from "./components/Course.vue";




const routes  = [
    {path: '/course/:courseId', name: 'Course', component: Course, props: true},
    {path: '/courseDashboard/:skillId', name: 'CourseDashboard', component: CourseDashboard},
    {path: '/skillDashboard', name: 'SkillDashboard', component: SkillDashboard},
    {path: '/', redirect: {name: 'SkillDashboard'}}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router