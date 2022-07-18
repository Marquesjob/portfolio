module.exports = {
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(pdf|xlsx|xls)$/,
            loader: 'file-loader',
            options: {
              name: `public/[name].[ext]`
            }
          }
        ],
       },
    },
  };
  