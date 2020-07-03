<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Вход в приложение</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="data.login"
                label="Логин"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="data.password"
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <p v-if="error" class="pl-5">{{ error }}</p>
            <v-spacer></v-spacer>
            <v-btn
              class="ma-2"
              :loading="isLoading"
              :disabled="isLoading"
              color="primary"
              @click="loginRequest()"
            >
              Вход
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* Имитируем запрос */
export const authRequest = (login, password) => new Promise((resolve, reject) => {
  const delay = parseInt(Math.random() * 3000);

  setTimeout(() => {
    if (login !== 'admin' && password !== 'admin') {
      return reject({
        error: 'Неправильные логин/пароль!'
      })
    }

    resolve()
  }, delay)
})

export default {
  data: function () {
    return {
      data: {
        login: null,
        password: null
      },      
      isLoading: false,
      error: null
    }
  },
  methods: {
    loginRequest() {
      this.isLoading = true
      this.$store.dispatch('authRequest', this.data)
        .then(() => {
          this.$router.push('/account')
        })
        .catch((error) => {
          this.error = error.error
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>
 .loading {
    position: absolute;
    left: 38%;
    bottom: 35%;
 }
</style>
