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

const emit = defineEmits(['update', 'delete'])

const age = computed(() => new Date().getFullYear() - props.person.birthYear)

function toggleDialogOpen() {
  isDialogOpen.value = !isDialogOpen.value;
}

function updatePerson(person) {
  emit('update', person)
  isDialogOpen.value = false;
}

</script>

<template>
  <tr>
    <td>{{ person.firstName }}</td>
    <td>{{ person.lastName }}</td>
    <td>{{ age }}</td>
    <td>
      <button @click="isDialogOpen = true" class="btn btn-secondary"><i class="bi bi-pencil-square"></i></button>
    </td>
    <td>
      <button @click="emit('delete')" class="btn btn-danger"><i class="bi bi-trash"></i></button>
    </td>
  </tr>
  <CustomDialog
      :person="person"
      :is-dialog-open="isDialogOpen"
      @update:model-value="toggleDialogOpen"
  >
<!--    addPerson umbenennen-->
    <PersonForm
        :person="person"
        @savePerson="updatePerson"
    />
  </CustomDialog>

</template>
