import {defineStore} from "pinia";


export const usePersonStore = defineStore('person',{
    state: () => ({
        persons: [{
            firstName: 'Max',
            lastName: 'Mustermann',
            birthYear: 1999
        }]
    })
})