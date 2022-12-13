import React from 'react'
import Form from '../components/Common/Form'
import Header from '../components/Common/Header'
import Layout from '../components/Layout'
import Teams from '../components/Team/Teams'


const TeamPage = () => {
  return (
    <Layout>
      <Header
        title='Our Team'
        description='The philosophy of Factly’s technology is to democratize tools around data and journalism. We aim to reduce the barrier for entry for news media organizations to pursue fact-checking, data journalism.'
      />
      <Teams />
      <Form />
    </Layout>
  )
}

export default TeamPage