import React from 'react'
import Form from '../components/Common/Form'
import Header from '../components/Common/Header'
import Products from '../components/Featured/Products'
import Layout from '../components/Layout'


const FeaturedPage = () => {
  return (
    <Layout>
      <Header
        title='Featured Products'
        description='The philosophy of Factly’s technology is to democratize tools around data and journalism. We aim to reduce the barrier for entry for news media organizations to pursue fact-checking, data journalism.'
      />
      <Products />
      <Form />
    </Layout>
  )
}

export default FeaturedPage