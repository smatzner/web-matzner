import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

// export const usePersonStore = defineStore('person', () => {
//     const persons = ref([
//         {
//             id: 5,
//             firstName: 'Max',
//             lastName: 'Mustermann',
//             birthYear: 1999
//         },{
//             id: 1,
//             firstName: 'Maria',
//             lastName: 'Musterfrau',
//             birthYear: 2006
//         }
//     ])
//
//     return {persons}
// })

export const usePersonStore = defineStore('person', () => {
    const persons = ref([])

    async function createPerson(person){
        const personResponse = await axios.post('https://kzxyvuiwms.user-management.asw.rest/api/users',person)
        persons.value.push(personResponse.data)
    }

    async function loadPersons(){
        const personResponse = await axios.get('https://kzxyvuiwms.user-management.asw.rest/api/users')
        persons.value = personResponse.data
    }



    return{
        persons,
        createPerson,
        loadPersons
    }
})