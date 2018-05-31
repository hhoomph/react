<<<<<<< HEAD
// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
}
=======
module.exports = {
    googleClientID: '207289414524-89bvfmgo61jv6qpcc8ftahjji8tdmvt5.apps.googleusercontent.com'
};
>>>>>>> a97293d9c236203b39f8bf2f1e58ef77f4727bf1
