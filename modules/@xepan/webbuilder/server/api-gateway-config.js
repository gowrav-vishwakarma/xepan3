module.exports = {
  apiEndpoints: {
    webAPI: {
      hosts: ['xepan3.loc', 'localhost'],
      paths: ['/api/xepan/webbuilder', '/api/xepan/webbuilder/*'],
    },
  },
  serviceEndpoints: {
    webhttpbin: {
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
    webPipeline: {
      apiEndpoints: ['webAPI'],
      policies: [
        {
          proxy: [
            {
              action: {
                serviceEndpoint: 'webhttpbin',
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
}
