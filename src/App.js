import App, { Container } from 'next/app'
import React from 'react'
import SEO from './next-seo.config'
import NextSeo from 'next-seo'

import Layout from './hoc/Layout/Layout'

import mainCss from '../static/css/main'
import spacingCss from '../static/css/spacing'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        {mainCss()}
        {spacingCss()}
        <Layout>
          <NextSeo config={SEO} />
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp