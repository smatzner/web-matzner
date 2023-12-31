import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const usePersonStore = defineStore('person', () => {
    const persons = ref([])

    async function createPerson(person) {
        const personResponse = await axios.post('https://kzxyvuiwms.user-management.asw.rest/api/users', person)
        persons.value.push(personResponse.data)
    }

    async function loadPersons() {
        const personResponse = await axios.get('https://kzxyvuiwms.user-management.asw.rest/api/users')
        persons.value = personResponse.data
    }

    async function loadPersonById(userId) {
        const personResponse = await axios.get('https://kzxyvuiwms.user-management.asw.rest/api/users/' + userId)
        const person = persons.value.find(person => person.userId === personResponse.data.userId)
        if (person === undefined) {
            persons.value.push(personResponse.data)
        }
    }

    async function updatePerson(userId, updatedPerson) {
            const personResponse = await axios.put('https://kzxyvuiwms.user-management.asw.rest/api/users/' + userId, updatedPerson)
        const personIndex = persons.value.findIndex(person => person.userId === userId)
        persons.value.splice(personIndex, 1, personResponse.data)
    }

    async function deletePerson(userId){
        await axios.delete('https://kzxyvuiwms.user-management.asw.rest/api/users/' + userId)
        const personIndex = persons.value.findIndex(person => person.userId === userId)
        persons.value.splice(personIndex, 1)
    }

    return {
        persons,
        createPerson,
        loadPersons,
        loadPersonById,
        updatePerson,
        deletePerson
    }
})