module.exports = {
  apiEndpoints: {
    coreAPI: {
      host: 'xepan3',
      paths: ['/api/xepan/core', '/api/xepan/core/*'],
    },
  },
  serviceEndpoints: {
    httpbin: {
      url: 'http://xepan3:3001',
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
                origin: '*',
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
