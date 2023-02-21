const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
module.exports = {
  images: {
    unoptimized: true
  },
 ...withNextra()
}
