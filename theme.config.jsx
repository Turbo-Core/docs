export default {
  logo: <h1>🚀 TurboCore Docs</h1>,
  docsRepositoryBase: "https://github.com/Turbo-Core/docs/tree/main/",
  project: {
    link: 'https://github.com/Turbo-Core/TurboCore',
  },
  useNextSeoProps() {
	  return {
	    titleTemplate: '%s - TurboCore',
	    description: 'API documentation for TurboCore'
	  }
  },
  darkMode: true,
  primaryHue: 212,
  footer: {
    text: <span>
      {new Date().getFullYear()} © TurboCore.
    </span>,
  },
  faviconGlyph: '🚀',
  // https://nextra.site/docs/docs-theme/theme-configuration
}
