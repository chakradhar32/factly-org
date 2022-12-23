import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Form from '../components/Common/Form'

const PostPage = () => {
  return (
    <Layout>
      <Post />
      <Form />
    </Layout>
  )
}

export default PostPage