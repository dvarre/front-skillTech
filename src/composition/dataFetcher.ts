import {Ref, ref} from "vue";
import {ICourse} from "../interfaces/ICourse.ts";

export function useFetchCourses() { //TODO rajouter idSkill: number dans les paramètres de la fonction une fis l'URL back mis en place
    const loading: Ref<boolean> = ref(false);
    const data: Ref<ICourse[]> = ref([]);
    const error: Ref<boolean> = ref(false);
    const fetchCourses: () => void = async function (){ //TODO rajouter idSkill: number dans les paramètres de la fonction une fis l'URL back mis en place
        //const fetchUrl: RequestInfo | URL = ''; //TODO Mettre l'URL back à fetch

        loading.value = true;

        try {
            //data.value = await (await fetch(fetchUrl)).json();//TODO Décommenter cette ligne quand l'URL back sera mis en place
            data.value = [
                {id:1, name: 'Test1', author: 'Dimitri'},
                {id:2, name: 'Test2', author: 'Léa'}
            ] //TODO Commenter ce block une fois l'URL back mis en place
        } catch (err) {
            error.value = true;
            console.error("Erreur lors du fetch de data pour les courses du CourseDashboard : " + err);
        }
        loading.value = false;
    };
    return {
        loading,
        data,
        error,
        fetchCourses
    }
}