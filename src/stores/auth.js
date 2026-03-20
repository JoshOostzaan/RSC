import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),

  actions: {
    login(credentials) {
      const validUsers = [
        { username: 'inspector1', password: 'demo123', name: 'Jan de Vries' },
        { username: 'admin', password: 'admin123', name: 'Admin User' }
      ];

      const foundUser = validUsers.find(
        u =>
          u.username === credentials.username &&
          u.password === credentials.password
      );

      if (!foundUser) {
        return { success: false, error: 'Verkeerde gebruikersnaam of wachtwoord' };
      }

      if (!credentials.twoFactorCode || credentials.twoFactorCode.length !== 6) {
        return { success: false, error: 'Code moet 6 cijfers zijn' };
      }

      const userToSave = {
        username: foundUser.username,
        name: foundUser.name
      };

      localStorage.setItem('user', JSON.stringify(userToSave));
      this.user = userToSave;
      this.isAuthenticated = true;

      return { success: true };
    },

    logout() {
      localStorage.removeItem('user');
      this.user = null;
      this.isAuthenticated = false;
    },

    checkAuth() {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this.user = JSON.parse(savedUser);
        this.isAuthenticated = true;
      }
    }
  }
});
