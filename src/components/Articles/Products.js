/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Product from './Product'


const Products = () => {

  const products = [
    {
      title: "Dega",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-image.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Vidcheck",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/vidcheck-image.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Kavach",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/kavach-image.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Counting India",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-image.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "MandE",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-image.png",
      status: "Incubating",
      link: "/"
    },
    {
      title: "Bindu",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/dega-image.png",
      status: "Incubating",
      link: "/"
    },
  ]
  return (
    <section>
      <div sx={{
        my: '80px',
        p: '2rem',
        '.product-card:nth-child(even)': {
          backgroundColor: '#F9F9F9',
          '.image-container': {
            order: 2
          }
        }
      }}>
        {products.map((product) => (
          <Product data={{ ...product }} />
        ))}
      </div>
      <di sx={{ display: 'flex', justifyContent: 'center' }}>
        <button sx={{
          display: 'flex', alignItems: 'center', bg: '#CE212B', fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '18px',
          color: '#FFFFFF', px: '32px', py: '12px'
        }}>
          See more
        </button>
      </di>
    </section>
  )
}

export default Products