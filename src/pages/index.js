import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const cardStyle = {
  paddingBottom: "0.5rem",
  borderRadius: "0.5rem",
  background: "#fff",
}

const IndexPage = ({ data: { allContentfulPost } }) => (
  <Layout>
    <SEO
      title="Ermi's blog"
      keywords={[`music`, `programming`, `philosophy`, `meditation`]}
    />
    <div className="container lg:max-w-screen-lg mx-auto px-6 py-10">
      <div className="mb8">
        <div className="flex items-baseline justify-between border-b-2 border-grey-light mb-10">
          <h2 className="text-base font-display font-bold tracking-wide uppercase py-4 -mb-2px">
            Blog
          </h2>
        </div>
        <div className="flex flex-wrap -mx-3" style={cardStyle}>
          {allContentfulPost.edges.map(({ node }) => (
            <Card
              node={{ ...node, slug: `/posts/${node.slug}` }}
              key={node.id}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          title
          slug
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
