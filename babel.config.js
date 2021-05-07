module.exports = {
  presets: ['next/babel'],
  plugins: [
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
