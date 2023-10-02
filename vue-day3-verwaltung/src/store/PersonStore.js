import {defineStore} from "pinia";
import {ref} from "vue";


// export const usePersonStore = defineStore('person',{
//     state: () => ({
//         persons: [{
//             id: 1,
//             firstName: 'Max',
//             lastName: 'Mustermann',
//             birthYear: 1999
//         }]
//     })
// })

export const usePersonStore = defineStore('person', () => {
    const persons = ref([
        {
            id: 5,
            firstName: 'Max',
            lastName: 'Mustermann',
            birthYear: 1999
        }
    ])

    return {persons}
})