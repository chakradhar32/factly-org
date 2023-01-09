import React from 'react'
import Layout from '../components/Layout'
import Members from '../components/TeamDetails/Members'
import Form from '../components/Common/Form'


const TeamDetails = ({ pageContext: team }) => {
  return (
    <Layout>
      <Members members={team.members} />
      <Form />
    </Layout>
  )
}

export default TeamDetails