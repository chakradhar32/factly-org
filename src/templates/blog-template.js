/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import IntroSection from '../components/BlogPage/IntroSection';
import Layout from '../components/Layout';
import Form from '../components/Common/Form'
import { graphql } from 'gatsby';
import BlogCard from '../components/BlogPage/BlogCard';
import Pager from '../components/Pager';

const BlogPage = ({ data, pageContext }) => {
  const { posts, featuredPosts } = data
  return (
    <Layout>
      <IntroSection posts={featuredPosts.nodes.slice(0, 3)} />
      <div sx={{
        maxWidth: '1190px',
        mx: 'auto',
        px: ['24px', null, '24px']
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
      <Pager data={pageContext} />
      <Form />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query StoriesPageQuery($skip: Int!, $limit: Int!) {
    featuredPosts: allDegaPost {
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
    posts: allDegaPost(skip: $skip, limit: $limit) {
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

