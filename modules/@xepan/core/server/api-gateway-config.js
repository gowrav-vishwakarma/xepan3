module.exports = {
  apiEndpoints: {
    coreAPI: {
      host: 'localhost',
      paths: ['/api/xepan/core', '/api/xepan/core/*'],
    },
  },
  serviceEndpoints: {
    httpbin: {
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
    default: {
      apiEndpoints: ['coreAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                serviceEndpoint: 'httpbin',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
