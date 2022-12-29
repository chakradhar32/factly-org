/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Post from './Post'

const BlogCard = () => {

  const posts = [
    {
      image: "/assets/images/postImg.png",
      date: 'Sep 12, 22',
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      link: "/"
    },
    {
      image: "/assets/images/postImg2.png",
      date: 'Sep 12, 22',
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      link: "/"
    },
    {
      image: "/assets/images/postImg3.png",
      date: 'Sep 12, 22',
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      link: "/"
    },
    {
      image: "/assets/images/postImg3.png",
      date: 'Sep 12, 22',
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      link: "/"
    },
    {
      image: "/assets/images/postImg.png",
      date: 'Sep 12, 22',
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      link: "/"
    },
    {
      image: "/assets/images/postImg2.png",
      date: 'Sep 12, 22',
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      link: "/"
    },
  ]
  return (
    <section sx={{ maxWidth: '1190px', mx: 'auto', pb: '80px', }}>
      <h2 sx={{
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        variant: 'text.xl',
        lineHeight: '44px',
        color: '#CE212B',
        mb: '42px'
      }}>All Posts</h2>
      <div sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(316px, 1fr))',
        gridGap: '76px'
      }}>
        {posts.map((post) => (
          <Post data={{ ...post }} />
        ))}
      </div>
    </section>
  )
}

export default BlogCard