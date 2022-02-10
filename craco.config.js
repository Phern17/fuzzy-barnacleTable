const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#7adeae',
              '@text-color': 'black',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};