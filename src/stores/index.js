import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    }
  },

  actions: {
    login({ commit }, credentials) {
      // Demo gebruikers
      const validUsers = [
        { username: 'inspector1', password: 'demo123', name: 'Jan de Vries' },
        { username: 'admin', password: 'admin123', name: 'Admin User' }
      ];

      // Zoek de gebruiker
      let foundUser = null;
      for (let i = 0; i < validUsers.length; i++) {
        if (validUsers[i].username === credentials.username) {
          if (validUsers[i].password === credentials.password) {
            foundUser = validUsers[i];
            break;
          }
        }
      }

      // Check of gebruiker gevonden is
      if (foundUser) {
        // Check 2FA code (moet 6 cijfers zijn)
        if (credentials.twoFactorCode.length === 6) {
          const userToSave = {
            username: foundUser.username,
            name: foundUser.name
          };
          localStorage.setItem('user', JSON.stringify(userToSave));
          commit('SET_USER', userToSave);
          return { success: true };
        } else {
          return { success: false, error: 'Code moet 6 cijfers zijn' };
        }
      } else {
        return { success: false, error: 'Verkeerde gebruikersnaam of wachtwoord' };
      }
    },

    logout({ commit }) {
      localStorage.removeItem('user');
      commit('LOGOUT');
    },

    checkAuth({ commit }) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        commit('SET_USER', user);
      }
    }
  },

  getters: {
    currentUser(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  }
});