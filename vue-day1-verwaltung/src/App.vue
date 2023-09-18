<script setup>

</script>

<template>
  <div class="container">
    <h1 class="my-5">Übung: Personen Array</h1>
    <div class="row">
      <div class="col-12 col-md-5">
        <div class="p-4 bg-light">
          <h2 class="mb-4">Person anlegen</h2>
          <form id="addPersonForm" class="mb-5">
            <div class="mb-3">
              <label class="form-label" for="addPersonFirstName">Vorname</label>
              <input type="text" name="firstName" class="form-control" id="addPersonFirstName" required>
            </div>
            <div class="mb-3">
              <label class="form-label" for="addPersonLastName">Nachname</label>
              <input type="text" name="lastName" class="form-control" id="addPersonLastName" required>
            </div>
            <div class="mb-3">
              <label class="form-label" for="addPersonBirthYear">Geburtsjahr</label>
              <input type="number" name="birthYear" class="form-control" id="addPersonBirthYear" required>
            </div>
            <button type="submit" class="btn btn-success">Hinzufügen</button>
          </form>
          <h2 class="mb-4">Aktionen</h2>
          <div class="d-flex gap-3">
            <button type="button" class="btn btn-danger" id="deletePersonButton">Letztes Element löschen</button>
            <button type="button" class="btn btn-danger" id="clearAllButton">Alles löschen</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Alter</th>
          </tr>
          </thead>
          <tbody id="personTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
