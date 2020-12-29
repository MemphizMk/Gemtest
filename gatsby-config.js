module.exports = {
  siteMetadata: {
    siteTitle: 'GemWire',
    siteDescription: 'Your one stop for gaming and esports news',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://gemwire.gg/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'GemWire',
    authorDescription: 'Your one stop for Gaming and Esports News',
    avatar: '/gemwire.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `mail`,
        url: `mailto:gemwiremail@gemwire.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/gemwire`
      },
      {
        icon: `instagram`,
        url: `https://www.instagram.com/gemwire/`
      },
      {
        icon: `discord`,
        url: `discord.gg/Liquipedia`
      },

    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GemWire`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
