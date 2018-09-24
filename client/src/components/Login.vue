<template>
  <v-app>
    <v-container fluid>
      <div class="white elevation-1">
      <div class='login'>
        <v-layout row>
          <v-flex xs12 md12 fluid>
              <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title> Register </v-toolbar-title>
              </v-toolbar>
              <v-container>
              <v-text-field v-model='input.username' label="Username"></v-text-field>
              <v-text-field v-model='input.password' label="Password"></v-text-field>
              <v-btn @click='login' color="success">Login</v-btn>
            </v-container>
          </v-flex>
        </v-layout>
      </div>
    </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
</style>
