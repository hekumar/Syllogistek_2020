const path = require('path');



const dotenv = require('dotenv');
const Promise = require('bluebird');


// Use Bluebird for Promises everywhere. Bluebird is a highly optimized Promise library
global.Promise = Promise;

// Load configuration from `{root}/.env`

dotenv.config(); // loads `.env` and does not overwrite existing values (`.env` takes priority)