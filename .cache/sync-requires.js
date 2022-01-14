const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("G:\\estudos\\animations\\scroll-and-fade-in\\.cache\\dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("G:\\estudos\\animations\\scroll-and-fade-in\\src\\pages\\index.jsx")))
}

