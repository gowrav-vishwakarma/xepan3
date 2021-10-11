module.exports = {
  apiEndpoints: {
    coreAPI: {
      host: 'localhost',
      paths: ['/api/xepan/core', '/api/xepan/core/*'],
    },
  },
  serviceEndpoints: {
    coreService: {
      url: 'http://localhost:3001',
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
    corepipeline: {
      apiEndpoints: ['coreAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                origin: '*',
                serviceEndpoint: 'coreService',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
