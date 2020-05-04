import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { Heading, Box, Text, Flex } from "@chakra-ui/core"

import Layout from "../layout/layout"
import SEO from "../seo"
import Pagination from "../layout/pagination"

function Post({ data, pageContext }) {
  const { prev, next } = pageContext

  return (
    <Layout>
      <SEO
        title={data.contentfulPost.seo.title}
        description={data.contentfulPost.seo.description}
      />
      <Box>
        <Heading as="h2" fontFamily="unset">
          {data.contentfulPost.title}
        </Heading>
        <Box mb="5">
          <Text fontWeight="light" fontSize="sm" fontFamily="unset">
            {data.contentfulPost.date}
          </Text>
        </Box>
        {documentToReactComponents(data.contentfulPost.body.json, {
          renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => (
              <Heading as="h2">{children}</Heading>
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
      </Box>
      <Flex
        align="center"
        justify={!next || !prev ? "flex-end" : "space-between"}
        mt="50px"
      >
        {prev && <Pagination url={prev.slug} isFirst />}
        {next && <Pagination url={next.slug} />}
        {/* {(!next || !prev) && <Pagination />} */}
      </Flex>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM D, YYYY")
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
