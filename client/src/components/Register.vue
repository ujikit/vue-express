<template>
  <div class="">
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" value="" placeholder="Masukan Email" /><br>
    <input v-model="password" type="password" name="password" value=""><br>
    <button @click="register" name="button">Register</button>
  </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthentificationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
</style>
