/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import IntroSection from '../components/BlogPage/IntroSection';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogPage/BlogCard';
import Form from '../components/Common/Form'

const BlogPage = () => {
  return (
    <Layout>
      <IntroSection />
      <BlogCard />
      <Form />
    </Layout>
  )
}

export default BlogPage