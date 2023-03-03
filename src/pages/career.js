import React from 'react'
import Jobs from '../components/Career/Jobs'
import Header from '../components/Common/Header'
import Form from '../components/Common/Form'
import Layout from '../components/Layout'
import Values from '../components/Career/Values'
import { Seo } from '../components/Seo'

const CareerPage = () => {
  return (
    <Layout>
      <Seo
        title="Careers | Factly Organisation"
        description=""
      />
      <Header
        title='View Open Roles'
        description='The philosophy of Factly’s technology is to democratize tools around data and journalism. We aim to reduce the barrier for entry for news media organizations to pursue fact-checking, data journalism.'
      />
      <Values />
      <Jobs />
      <Form />
    </Layout>
  )
}

export default CareerPage