const components = require('./components.js');
const user = require('./user/index.js');

module.exports = {
    openapi: '3.0.3',
    info: {
        title: 'Games Server',
        version: '1.0.0',
    },
    ...components,
    paths: {
        ...user.paths,
    },
};