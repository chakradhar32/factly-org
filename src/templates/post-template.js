import * as React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';

const PostPage = ({ data }) => {
  const { posts, post: degaPost } = data;
  const currentPost = posts.edges.filter(({ node }) => node.id === degaPost.id)[0];
  const { previous: previousPost, next: nextPost } = currentPost;
  return (
    <Layout>
      <Post data={degaPost} previousPost={previousPost} nextPost={nextPost} />
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String!) {
    posts: allDegaPost {
      edges {
        node {
          published_date
          description
          description_html
          excerpt
          id
          schemas
          slug
          status
          subtitle
          title
          updated_at
          users {
            email
            first_name
            last_name
            id
            slug
          }
          tags {
            id
            name
            slug
            description
          }
          medium {
            alt_text
            id
            url
            dimensions
          }
          categories {
            description
            created_at
            id
            name
            slug
            medium {
              alt_text
              id
              url
              dimensions
            }
          }
        }
        next {
          slug
          title
          published_date
          medium {
            alt_text
            id
            url
            dimensions
          }
        }
        previous {
          slug
          title
          published_date
          medium {
            alt_text
            id
            url
            dimensions
          }
        }
      }
    }
    post: degaPost(slug: { eq: $slug }) {
      published_date
      description
      description_html
      excerpt
      id
      schemas
      slug
      status
      subtitle
      title
      updated_at
      users {
        email
        first_name
        last_name
        display_name
        id
      }
      tags {
        id
        name
        slug
        description
      }
      medium {
        alt_text
        id
        url
        dimensions
      }
      categories {
        description
        created_at
        id
        name
        slug
      }
    }
    recentPosts: allDegaPost(
      sort: { fields: created_at, order: DESC }
      filter: { format: { slug: { eq: "article" } } }
      limit: 3
    ) {
      nodes {
        created_at
        title
        excerpt
        slug
        users {
          display_name
          slug
          id
        }
        published_date
        categories {
          name
          slug
        }
        medium {
          dimensions
          alt_text
          url
        }
      }
    }
  }
`;
