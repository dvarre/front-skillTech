import {ref, Ref} from "vue";
import router from "../routes.ts";

export function useCourseDashboard() {
    const skillId: number = 1;
    const skillName: Ref<string> = ref("Java");
    const redirectToCourse = function (courseId: number) {
        router.push({
            path: `/course/` + courseId,
            state: {
                userProgression : {
                    id : 1,
                    name: "Test",
                    progression: 50
                }
            }
        })
    }

    return [skillId, skillName, redirectToCourse];
}