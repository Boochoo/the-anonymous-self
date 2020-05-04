import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Heading, IconButton } from "@chakra-ui/core"
import styled from "@emotion/styled"

import { themeColors } from "../../shared/utilities"

const HeaderWrapper = styled("header")`
  margin-bottom: 1.45rem;
  border-bottom: 3px solid ${themeColors.gray};
`

const HeaderBoxWrapper = styled("div")`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => {
  const mode = window.localStorage.getItem("darkMode")
  const getState = mode && mode === "true" ? true : false
  const [darkMode, setDarkMode] = useState(() => getState)
  const { white, black } = themeColors

  useEffect(() => {
    window.localStorage.setItem("darkMode", darkMode)
    const { style } = document.body

    style.backgroundColor = darkMode ? black : white
    style.color = darkMode ? white : black
  }, [darkMode, white, black])

  return (
    <HeaderWrapper>
      <HeaderBoxWrapper>
        <Heading as="h1" fontFamily="unset" fontSize="3xl">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
        <IconButton
          size="sm"
          borderRadius="50%"
          // isChecked={darkMode}
          onClick={() => setDarkMode(!darkMode)}
          color={darkMode ? black : white}
          bg={darkMode ? white : black}
          _hover={{
            color: darkMode ? white : black,
            background: darkMode ? black : white,
          }}
          style={{ borderColor: themeColors.darkGray }}
          borderWidth="2px"
          borderStyle="solid"
          icon={darkMode ? "moon" : "sun"}
          aria-label="Change between dark and light mode"
        />
      </HeaderBoxWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
