import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

function Post({ data }) {
  return (
    <Layout>
      <SEO
        title={data.contentfulPost.seo.title}
        description={data.contentfulPost.seo.description}
      />
      <div className="lesson__details">
        <h2>{data.contentfulPost.title}</h2>
        {documentToReactComponents(data.contentfulPost.body.json, {
          renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => (
              <h2 className="text-4xl">{children}</h2>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
              return (
                node.data.target.fields && (
                  <img
                    src={node.data.target.fields.file["en-US"].url}
                    alt={node.data.target.fields.file.name}
                  />
                )
              )
            },
          },
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      body {
        json
      }
      seo {
        title
        description
      }
    }
  }
`

export default Post
