const { paginate } = require('gatsby-awesome-pagination')
const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    // const data = await graphql(`
    //     {
    //         allProjectsJson {
    //             edges {
    //                 node {
    //                     slug
    //                 }
    //             }
    //         }
    //     }
    // `)

    // if(data.errors) {
    //     console.log('error retreving local data', data.errors)
    //     return
    // }

    // const projectTemplate = require.resolve('./src/templates/ProjectPage.js')

    // data.data.allProjectsJson.edges.forEach(edge => {
    //     createPage({
    //         path: `/project/${edge.node.slug}`,
    //         component: projectTemplate,
    //         context: {
    //             slug: edge.node.slug
    //         }
    //     })
    // })

    const projectsJson = await graphql(`
        {
            allProjectsJson {
                nodes {
                    slug
                    text
                    client
                    categories {
                        title
                    }
                    year
                    day
                    month
                    main_image {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                    thumbnail_image1 {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    `);

    paginate({
        createPage,
        items: projectsJson.data.allProjectsJson.nodes,
        itemsPerPage: 5,
        pathPrefix: '/projects',
        component: path.resolve(`src/templates/ProjectsIndexPage.js`)
    })

}
