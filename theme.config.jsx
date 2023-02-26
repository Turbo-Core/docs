import Image from 'next/image'

export default {
  logo: 
  <>
    <Image src="/logo.svg" alt="TurboCore" width={45} height={45} />
    <span style={{marginLeft: "15px", fontSize: "1.1rem"}}>TurboCore Docs</span>
  </>,
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
