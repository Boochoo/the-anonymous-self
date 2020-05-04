import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider, CSSReset, Heading, Box } from "@chakra-ui/core"
import { generate as generateId } from "shortid"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = ({ data: { allContentfulPost } }) => (
  <ThemeProvider>
    <Layout>
      <CSSReset />
      <SEO
        title="Ermi's blog"
        keywords={[`music`, `programming`, `philosophy`, `meditation`]}
      />
      <Box>
        <Box mt="1">
          <Box>
            <Heading as="h3" fontFamily="unset">
              Blog
            </Heading>
          </Box>
          <Box mt="6">
            {allContentfulPost.edges.map(({ node }) => {
              return (
                <Card
                  node={{ ...node, slug: `/posts/${node.slug}` }}
                  key={generateId()}
                />
              )
            })}
          </Box>
        </Box>
      </Box>
    </Layout>
  </ThemeProvider>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          title
          slug
          description {
            description
          }
          image {
            file {
              url
            }
          }
          date(formatString: "MMMM D, YYYY")
          id
        }
      }
    }
  }
`
