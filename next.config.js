/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST_BASE: 'https://jesdakorn.herokuapp.com/',
    API_BASE: 'http://127.0.0.1:8000/',
    API_HOST: 'http://127.0.0.1:8000/api/',
},
}


const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});