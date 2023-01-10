/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout'
import { jsx } from 'theme-ui';
import Services from '../components/Work/Services';
import Header from '../components/Common/Header';
import Form from '../components/Common/Form';
import { Seo } from '../components/seo';

const WorkPage = () => {
  return (
    <Layout>
      <Seo
        title="Work | Factly Organisation"
        description=""
      />
      <Header
        title='Our Work'
        description='The philosophy of Factly’s technology is to democratize tools around data and journalism. We aim to reduce the barrier for entry for news media organizations to pursue fact-checking, data journalism.'
      />
      <Services />
      <Form />
    </Layout>
  )
}

export default WorkPage