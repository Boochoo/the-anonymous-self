const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const lessonTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulPost.edges.forEach(edge => {
      createPage({
        path: `/posts/${edge.node.slug}`,
        component: lessonTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
