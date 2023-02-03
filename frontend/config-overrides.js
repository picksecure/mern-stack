const { override } = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'self'",
    'base-uri': "'self'",
    'object-src': "'none'",
    'connect-src': "'self' https://maps.googleapis.com",
    'img-src': "'self' data: *",
    'script-src-elem': ["'self' 'unsafe-inline' https://maps.googleapis.com/"],
    'script-src': ["'self' 'unsafe-inline' https://maps.googleapis.com/"],
    'style-src': "'self' 'unsafe-inline'",
    'style-src-elem': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    'style-src-attr': "'self' 'unsafe-inline'"
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