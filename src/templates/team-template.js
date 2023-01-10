import React from 'react'
import Layout from '../components/Layout'
import Members from '../components/TeamDetails/Members'
import Form from '../components/Common/Form'
import { Seo } from '../components/seo'


const TeamDetails = ({ pageContext: team }) => {
  return (
    <Layout>
      <Seo
        title={team.name}
        description={""}
      />
      <Members members={team.members} />
      <Form />
    </Layout>
  )
}

export default TeamDetails