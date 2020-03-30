/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <div
        className="container"
      >
        <main>{children}</main>
      </div>
      <footer style={{ padding: "5em" }}>
        <div className="container" >
          © {new Date().getFullYear()} Lebrecht Schnörres, built with ❤️
          <p>Hier ist der overengineered <a href="http://github.com/ortimis/schnoerres">Sourcecode</a> für etwas webdev action ;)</p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
