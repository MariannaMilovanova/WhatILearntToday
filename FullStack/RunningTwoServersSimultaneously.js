//install pacakge conccurenty
//yarn add concurrently

const clientServerFolder = 'client'; //inside server
//add in json to the scripts
const newScripts = {
  "server": "nodemon index.js",
  "client": "npm run start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
};





