module.exports = {
  apiEndpoints: {
    marsAPI: {
      host: 'localhost',
      paths: ['/api/xepan/mars', '/api/xepan/mars/*'],
    },
  },
  serviceEndpoints: {
    marsService: {
      url: 'http://localhost:3004',
    },
  },
  policies: [
    'basic-auth',
    'cors',
    'expression',
    'key-auth',
    'log',
    'oauth2',
    'proxy',
    'rate-limit',
  ],
  pipelines: {
    marsPipeline: {
      apiEndpoints: ['marsAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                origin: '*',
                serviceEndpoint: 'marsService',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
