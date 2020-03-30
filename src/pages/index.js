import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Spin from 'react-reveal/Spin';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <div style={{ padding: "4em 4em 4em 0" }}>
        <Image />
        <h1 className="text-6xl leading-tight	">Hallo. <br />Ich bin Lebrecht.</h1>
        <p>Auf Honolulu heißt #metoo ich will auch</p>
        <br />
        <p>Kontaktiere mich! <a href="mailto:lebrecht@schnörres.de">lebrecht@schnörres.de</a></p>


      </div>

    </Layout>
  </>
)

export default IndexPage
