module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    'inline-react-svg',
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "~",
        "rootPathSuffix": "src"
      }
    ]
  ]
}
