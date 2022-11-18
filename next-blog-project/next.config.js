const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_userName: "dbUser",
        mongodb_password: "",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    }
  }
  
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_userName: "dbUser",
      mongodb_password: "",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  }
}

module.exports = nextConfig
