module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    ipAddress: '192.168.0.101',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    apiURL: process.env.API_URL,
  }
}
