module.exports = {
  apiEndpoints: {
    okrAPI: {
      host: 'localhost',
      paths: ['/api/xepan/okrs', '/api/xepan/okrs/*'],
    },
  },
  serviceEndpoints: {
    okrService: {
      url: 'http://localhost:3006',
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
    okrPipeline: {
      apiEndpoints: ['okrAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                origin: '*',
                serviceEndpoint: 'okrService',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
