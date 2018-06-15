//to run both devD and D on heroku only in client folder and then run npm run build
const scripts = {
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
};

//NPM_CONFIG_PRODUCTION=false npm install  - to install all dependencies
//--prefix client  - only on client folder
// && - then run another command
// npm run build --prefix client" - run build in client folder

