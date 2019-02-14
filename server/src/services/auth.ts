import auth0 from 'auth0-js';
import keys from "../../config/keys";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-u5f8htn2.eu.auth0.com',
    clientID: keys.auth0clientID,
    redirectUri: 'http://localhost:5000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}