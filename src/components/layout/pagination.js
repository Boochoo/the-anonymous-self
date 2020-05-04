import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Flex, PseudoBox, Icon } from "@chakra-ui/core"

import { themeColors } from "../../shared/utilities"

const Pagination = ({ url, isFirst }) => {
  return (
    <Flex>
      <PseudoBox
        fontSize="xl"
        textTransform="capitalize"
        color={themeColors.green}
        _hover={{ textDecoration: "underline" }}
      >
        <Link to={`/posts/${url}`}>
          {!isFirst && url.split("-").join(" ")}
          <Icon name={`chevron-${isFirst ? "left" : "right"}`} fontSize="3xl" />
          {isFirst && url.split("-").join(" ")}
        </Link>
      </PseudoBox>
    </Flex>
  )
}

Pagination.protoTypes = {
  url: PropTypes.string,
  isFirst: PropTypes.boolean,
}

export default Pagination
