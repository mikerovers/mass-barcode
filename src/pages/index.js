import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BarcodeList from '../components/barcode-list';
import IndexContainer from '../components/index-container';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mass`, `barcode`, `generator`]} />
    <IndexContainer />
  </Layout>
)

export default IndexPage
