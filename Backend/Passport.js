const googlePassportStrategy = 'passport-google-oauth20'; //recommended version 2.0
//npm i -S passport passport-google-oauth20
//need to provide clientId and clientSecret
// go to console.developers.google.com
// create new project
// go to this project - push enable api
//search for google+, select Google+ API - click enable
//need to creaete cred - click on create credentials
//click on client ID
//click on configure consent screen
//fill product name, save, choose web application
// fill Autharizes JS origin like : http://localhost:5000 and Auth redirec URLs like http://localhost:5000/*
//click create, copy ID and secret
const clientId = 'public token - we can share this with the public';
const clientSecret = 'private token - we do not want anyone to see this';

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: './auth/google/callback',//where need to redirect after user grands permissions
}, accessToken => {
  console.log(accessToken)
})); //new instance of Google passport strategy
