<script setup>
import {computed, ref} from "vue";
import CustomDialog from "@/components/CustomDialog.vue";
import PersonForm from "@/components/PersonForm.vue";

const isDialogOpen = ref(false)

const props = defineProps({
  person: {
    required: true,
    type: Object
  }
})

// const emit = defineEmits(['update', 'delete'])

const age = computed(() => new Date().getFullYear() - props.person.birthYear)


// function updatePerson(person) {
//   emit('update', person)
//   isDialogOpen.value = false;
// }

</script>

<template>
  <tr>
    <td>{{ person.firstName }}</td>
    <td>{{ person.lastName }}</td>
    <td>{{ age }}</td>
    <td class="text-end">
      <RouterLink :to="`/persons/${person.id}`" class="btn btn-secondary">Details</RouterLink>
    </td>
  </tr>
  <p>id {{person.id}}</p>
</template>
