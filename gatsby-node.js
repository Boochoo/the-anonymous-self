const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postsTemplate = path.resolve(`src/components/templates/post.js`)

  return graphql(`
    {
      allContentfulPost(sort: { order: ASC, fields: [date] }) {
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
    const posts = result.data.allContentfulPost.edges

    posts.forEach(({ node }, index) => {
      const path = `/posts/${node.slug}`

      createPage({
        path,
        component: postsTemplate,
        context: {
          slug: node.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
  })
}
