//To add prettier run
//yarn add husky lint-staged prettier

//Add the following line to scripts section:
/*

"scripts": {
  + "precommit": "lint-staged"

*/


//Next add a 'lint-staged' field to the package.json, for example:
/*

+ "lint-staged": {
  +   "src/!**!/!*.{js,jsx,json,css}": [
    +     "prettier --single-quote --write",
    +     "git add"
    +   ]
  + },

*/

//Run this command to format your entire project for the first time.
//./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"