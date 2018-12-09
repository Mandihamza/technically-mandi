const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Mandi Hamza | Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Mandi Hamza | Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://www.technicallymandi.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'I\'m a self-taught developer with experience in e-commerce marketing & sponsorship development.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@mandihamza', // Twitter Username
  ogSiteName: 'Mandi Hamza - Developer | Portfolio', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
