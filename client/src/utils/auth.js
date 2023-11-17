import decode from 'jwt-decode';

class AuthService {
    getProfile() {
      return decode(this.getToken());
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
      }

      isTokenExpired(token) {
        try {
          const decoded = decode(token);
          if (decoded.exp < Date.now() / 1000) {
            return true;
          } else return false;
        } catch (err) {
          return false;
        }
      }

      // Retrieves the user token from localStorage
      getToken() {
        return localStorage.getItem('id_token');
      }
    
      // Saves user token to localStorage
      login(idToken) {
        localStorage.setItem('id_token', idToken);
    
        window.location.assign('/');
      }
    
      // Clear user token and profile data from localStorage
      logout() {
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
      }
    }
    
    export default new AuthService();