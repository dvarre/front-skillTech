import {createRouter, createWebHistory} from "vue-router";

import SkillDashboard from "./Views/SkillDashboard.vue";
import CourseDashboard from "./Views/CourseDashboard.vue";

const routes  = [
    {path: '/skills', name: 'SkillDashboard', component: SkillDashboard},
    {path: '/courses', name: 'CourseDashboard', component: CourseDashboard},
    {path: '/', redirect: {name: 'SkillDashboard'}}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router