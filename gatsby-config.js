module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "PragICTS"
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-json",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: "./content/",
            }
        },
        "gatsby-plugin-scroll-reveal",
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "pragicts-web",
            },
        },
    ],
};
