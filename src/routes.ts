import {createRouter, createWebHistory} from "vue-router";

import SkillDashboard from "./Views/SkillDashboard.vue";

const routes  = [
    {path: '/skills', name: 'SkillDashboard', component: SkillDashboard},
    {path: '/', redirect: {name: 'SkillDashboard'}}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router