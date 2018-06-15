//to use request object freely you need to parse it first
// with body parser
//after it will be awailable under req.body
const bodyParser = require('body-parser'); //it is express middleware so shoud be through app.use

app.use(bodyParser.json()); //to parse to json