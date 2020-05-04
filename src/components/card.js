import React from "react"
import { Box, Heading, CSSReset, Text, Link } from "@chakra-ui/core"
import styled from "@emotion/styled"

import { themeColors } from "../shared/utilities"

const CardWrapper = styled("div")`
  padding: 0.5rem 1rem;
  border-left: 12px solid ${themeColors.darkGray};
  border-bottom: 2px solid ${themeColors.darkGray};
`

const Card = ({ node: { title, slug, image, description, date } }) => (
  <Box width="100%" mb="10" overflow="hidden">
    <CSSReset />
    {/* <Box>
      <Box
        style={{
          height: 200,
          backgroundImage: `url(https:${image.file.url}?w=640&h=360&fit=thumb)`,
        }}
      />
    </Box> */}
    <CardWrapper>
      <Link
        href={slug}
        _hover={{ color: themeColors.green, textDecoration: "none" }}
      >
        <Heading
          fontWeight="bolder"
          fontSize="4xl"
          fontFamily="unset"
          mb="1"
          lineHeight="1"
        >
          {title}
        </Heading>
      </Link>
      <Box mb="5">
        <Text fontWeight="light" fontSize="sm" fontFamily="unset">
          Posted on: {date}
        </Text>
      </Box>
      <Box>
        <Text fontSize="md" fontWeight="light" fontFamily="unset">
          {description.description}
        </Text>
      </Box>
    </CardWrapper>
  </Box>
)

export default Card
