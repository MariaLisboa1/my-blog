import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import AboutMe from '../components/AboutMe';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutMe />
  </Layout>
)

export default AboutPage
