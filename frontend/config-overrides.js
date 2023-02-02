const { override } = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'self'",
    'base-uri': "'self'",
    'object-src': "'none'",
    'img-src': "'self' 'unsafe-inline'",
    'script-src-elem': ["'self' 'unsafe-inline'"],
    'script-src': ["'self'"],
    'style-src': ["'self' 'unsafe-inline'"]
};

function addCspHtmlWebpackPlugin(config) {
    if (process.env.NODE_ENV === 'production') {
        config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
    }

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};