module.exports = {
    siteMetadata: {
        title: "gatsby-starter-tailwind-styled-components",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind-styled-components`,
                short_name: `gatsby-tw-sc`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/favicon.png`,
            },
        },
        "gatsby-plugin-styled-components",
    ],
};
