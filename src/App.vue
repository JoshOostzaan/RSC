<template>
  <div id="app">
    <header v-if="isLoggedIn">
      <div class="header-content">
        <div class="logo">
          <img src="/logo.png" alt="Logo" />
          <h2>RealEstateCare</h2>
        </div>

        <nav>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/inspections/assigned">Toegewezen</router-link>
          <router-link to="/inspections/completed">Uitgevoerd</router-link>
          <router-link to="/knowledge-base">Kennisbase</router-link>
        </nav>

        <div class="user-info">
          <span>{{ userName }}</span>
          <button @click="handleLogout">Uitloggen</button>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export default {
  setup() {
    const auth = useAuthStore();
    const router = useRouter();

    // Restore login state on refresh
    onMounted(() => {
      auth.checkAuth();
    });

    const isLoggedIn = computed(() => auth.isAuthenticated);
    const userName = computed(() => auth.user?.name ?? '');

    const handleLogout = () => {
      auth.logout();
      router.push('/login');
    };

    return {
      isLoggedIn,
      userName,
      handleLogout
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background: #f4f6f8;
  color: #141b1f;
}

header {
  background: #ffffff;
  border-bottom: 3px solid #00aaa2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

h2 {
  color: #141b1f;
  font-size: 20px;
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  padding: 10px 20px;
  color: #475e6c;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.2s;
}

nav a:hover {
  background: rgba(0, 170, 162, 0.1);
  color: #00aaa2;
}

nav a.router-link-active {
  background: #00aaa2;
  color: white;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info span {
  color: #475e6c;
}

.user-info button {
  padding: 8px 16px;
  background: white;
  color: #00aaa2;
  border: 2px solid #00aaa2;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.user-info button:hover {
  background: #00aaa2;
  color: white;
}

main {
  min-height: calc(100vh - 70px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 40px;
  width: auto;
}
</style>
