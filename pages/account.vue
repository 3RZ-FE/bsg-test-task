<template>
  <v-row align="center" justify="center">
    <div class="d-flex flex-column">
    <h1 class="mb-10">Ваш аккаунт</h1>
    <v-card :min-width="400">
      <div class="d-flex flex-no-wrap align-center pl-5">
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="Вася"
          >
        </v-avatar>
        <div>
          <v-card-title>{{ user.name }}</v-card-title>
          <v-card-subtitle>{{ user.email }}</v-card-subtitle>
        </div>
      </div>
    </v-card>
    </div>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      'user': state => state.user
    })
  }
}
</script>