module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  babelrcRoots: ['./'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@layouts': './src/layouts',
          '@theme': './src',
          '@tokens': './src/tokens',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
