import React from 'react'
import Header from '../components/Common/Header'
import Form from '../components/Common/Form'
import Products from '../components/Articles/Products'
import Layout from '../components/Layout'


const ArticlePage = () => {
  return (
    <Layout>
      <Header
        title='All Products'
        description='The philosophy of Factly’s technology is to democratize tools around data and journalism. We aim to reduce the barrier for entry for news media organizations to pursue fact-checking, data journalism.'
      />
      <Products />
      <Form />
    </Layout>
  )
}

export default ArticlePage