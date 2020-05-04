import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { CSSReset } from "@chakra-ui/core"

import Header from "./header"
import Footer from "./footer"
import { themeColors } from "../../shared/utilities"

const Wrapper = styled("div")`
  margin: 0 auto;
  max-width: 960px;
  padding: 2.5rem 2rem;
`
const Main = styled("main")`
  margin-bottom: 3.5rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            overflow-y: scroll;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            position: relative;
            min-height: 100vh;
            line-height: 1.5;
            background-color: ${themeColors.white};
            color: ${themeColors.black};
          }
          p {
            margin: 2rem 0;
          }
        `}
      />

      <Header as="h1" siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
