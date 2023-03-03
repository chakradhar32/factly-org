import React from 'react'
import Form from '../components/Common/Form'
import Header from '../components/Common/Header'
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import Teams from '../components/Teams/Teams'
import teams from '/teams.json'


const TeamPage = () => {
  return (
    <Layout>
      <Seo
        title="Teams | Factly Organisation"
        description=""
      />
      <Header
        title='Our Team'
        description='The philosophy of Factly’s technology is to democratize tools around data and journalism. We aim to reduce the barrier for entry for news media organizations to pursue fact-checking, data journalism.'
      />
      <Teams teams={teams} />
      <Form />
    </Layout>
  )
}

export default TeamPage