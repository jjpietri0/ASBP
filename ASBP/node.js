
// Import the ADAL library
import * as AuthenticationContext from 'adal-angular';

// Create an instance of the AuthenticationContext
const authContext = new AuthenticationContext({
  clientId: 'e1086679-f95c-43b4-a0be-cc1d5ca97a6c',
  tenant: 'c0452731-f80a-41b2-ac79-de3b3e6a749f',
  redirectUri: 'your-redirect-uri',
  postLogoutRedirectUri: 'your-post-logout-redirect-uri',
});

// Check if the user is authenticated
if (authContext.isAuthenticated()) {
  // If the user is authenticated, redirect them to the desired site
  window.location.href = 'http://example.com';
} else {
  // If the user is not authenticated, redirect them to the Azure AD login page
  authContext.login();
}

