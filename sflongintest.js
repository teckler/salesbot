var nforce = require('nforce');

var org = nforce.createConnection({
  clientId: '3MVG98RqVesxRgQ6abeUDaL8txdCbQdaASc1jZlMVZuZoBl864fJw9VRj.HavfpYOpQKASbWAFKbm0nM61x8n',
  clientSecret: '3967975534978011198',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  apiVersion: 'v27.0',  // optional, defaults to current salesforce API version
  environment: 'todddev',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single' // optional, 'single' or 'multi' user mode, multi default
});

// single-user mode
org.authenticate({ username: 'teckler@northplains.com.todddev', password: 'I58S9ZSybh27'}, function(err, resp){
  // the oauth object was stored in the connection object
  if(!err) console.log('Cached Token: ' + org.oauth.access_token)
});