import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      padding: "2em"
    }}
  >
    <div
      className="container flex justify-between"
    >
      <h1 className="w-1/4" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="w-3/4">
        <nav className="flex justify-end">
          <Link to="/vino" className="px-5">Vino?</Link>
          <a href="https://www.linkedin.com/in/leander-schneider-756b76198/" className="px-5">Stalk mich.</a>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
