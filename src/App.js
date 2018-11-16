import App, { Container } from 'next/app'
import React from 'react'
import SEO from './next-seo.config'
import NextSeo from 'next-seo'

import Layout from './hoc/Layout/Layout'

import mainCss from '../static/css/main'
import spacingCss from '../static/css/spacing'
import flexCss from '../static/css/flex'
import textCss from '../static/css/text'




class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        {mainCss()}
        {spacingCss()}
        {flexCss()}
        {textCss()}
        <Layout>
          <NextSeo config={SEO} />
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp