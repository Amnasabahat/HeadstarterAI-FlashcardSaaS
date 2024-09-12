// next.config.js

const path = require('path'); // Make sure to require 'path' at the top

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname); // Set the alias for '@' to the root directory
    return config;
  },
};

module.exports = nextConfig; // Correctly export the nextConfig object
