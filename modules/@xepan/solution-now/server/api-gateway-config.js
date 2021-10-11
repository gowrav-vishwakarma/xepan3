module.exports = {
  apiEndpoints: {
    snAPI: {
      host: 'localhost',
      paths: ['/api/xepan/solution-now', '/api/xepan/solution-now/*'],
    },
  },
  serviceEndpoints: {
    snService: {
      url: 'http://localhost:3007',
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
    snPipeline: {
      apiEndpoints: ['snAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                origin: '*',
                serviceEndpoint: 'snService',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
