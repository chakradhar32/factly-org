/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import IntroSection from '../components/BlogPage/IntroSection';
import Layout from '../components/Layout';
import Form from '../components/Common/Form'
import { graphql } from 'gatsby';
import BlogCard from '../components/BlogPage/BlogCard';

const BlogPage = ({ data }) => {
  console.log({ data })
  const { posts } = data
  return (
    <Layout>
      <IntroSection posts={posts.nodes.slice(0, 3)} />
      <div sx={{
        maxWidth: '1190px',
        mx: 'auto'
      }}>
        <h2
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '44px',
            color: '#CE212B',
            mb: '42px'
          }}
        >
          All Posts
        </h2>
        <div
          sx={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {posts.nodes.length > 3 &&
            posts.nodes.slice(3).map((post) => <BlogCard key={post.id} data={post} />)}
        </div>
      </div>
      <Form />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query StoriesPageQuery {
    posts: allDegaPost {
      nodes {
        users {
          id
          first_name
          last_name
        }
        medium {
          alt_text
          url
          dimensions
        }
        published_date
        id
        status
        subtitle
        title
        slug
        excerpt
      }
    }
  }
`;

