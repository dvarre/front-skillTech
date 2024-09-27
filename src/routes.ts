import {createRouter, createWebHistory} from "vue-router";

import SkillDashboard from "./Views/SkillDashboard.vue";
import CourseDashboard from "./Views/CourseDashboard.vue";
import ThreeExampleView from "./Views/ThreeExampleView.vue";

const routes  = [
    {path: '/skills', name: 'SkillDashboard', component: SkillDashboard},
    {path: '/three', name: 'ThreeExampleView', component: ThreeExampleView},
    {path: '/courses', name: 'CourseDashboard', component: CourseDashboard},
    {path: '/', redirect: {name: 'SkillDashboard'}}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router