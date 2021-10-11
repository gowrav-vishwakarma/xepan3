module.exports = {
  apiEndpoints: {
    hihrAPI: {
      hosts: ['localhost', 'xepan.loc'],
      paths: ['/api/xepan/hihr', '/api/xepan/hihr/*'],
    },
  },
  serviceEndpoints: {
    hihrService: {
      url: 'http://localhost:3005',
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
    hihrPipeline: {
      apiEndpoints: ['hihrAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                origin: '*',
                serviceEndpoint: 'hihrService',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
