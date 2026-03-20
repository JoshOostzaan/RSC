<template>
    <div class="login-page">
      <h1>Login</h1>
  
      <div class="form-group">
        <label>Gebruikersnaam</label>
        <input v-model="username" type="text" />
      </div>
  
      <div class="form-group">
        <label>Wachtwoord</label>
        <input v-model="password" type="password" />
      </div>
  
      <div class="form-group">
        <label>2FA code</label>
        <input v-model="twoFactorCode" type="text" />
      </div>
  
      <button @click="handleLogin">Inloggen</button>
  
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/auth';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        twoFactorCode: '',
        errorMessage: ''
      };
    },
  
    methods: {
      async handleLogin() {
        const authStore = useAuthStore();
  
        const result = await authStore.login({
          username: this.username,
          password: this.password,
          twoFactorCode: this.twoFactorCode
        });
  
        if (result.success) {
          this.errorMessage = '';
          this.$router.push('/dashboard');
        } else {
          this.errorMessage = result.error;
        }
      }
    }
  };
  </script>
  
  <style>
  .login-page {
    max-width: 400px;
    margin: 80px auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
  }
  
  button {
    width: 100%;
    padding: 10px;
  }
  </style>
  