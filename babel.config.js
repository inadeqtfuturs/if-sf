module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  babelrcRoots: ['./'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@layouts': './src/layouts',
          '@theme': './src/theme',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
