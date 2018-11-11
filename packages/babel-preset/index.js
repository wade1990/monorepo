const builder = require('./utils/builder');

module.exports = (api, opts) => {
    const env = process.env.BABEL_ENV || process.env.NODE_ENV;
    return builder(api, opts, env);
};