module.exports = {
  apiEndpoints: {
    developerAPI: {
      host: 'localhost',
      paths: ['/api/xepan/developer', '/api/xepan/developer/*'],
    },
  },
  serviceEndpoints: {
    developerService: {
      url: 'http://localhost:3002',
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
    developerPipeline: {
      apiEndpoints: ['developerAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                serviceEndpoint: 'developerService',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
