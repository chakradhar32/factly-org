/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Service from './Service'

const Services = () => {

  const services = [
    {
      title: "Content Creation",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/creation.png",
    },
    {
      title: "Open Data",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/opendata.png",
    },
    {
      title: "Training",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/creation.png",
    },
    {
      title: "Information Tools",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/creation.png",
    },
    {
      title: "Research",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/opendata.png",
    },
    {
      title: "Research",
      description: `<p>Dega is a lightweight, scalable & high performant open-source publishing platform for small and medium scale news media organizations. The platform has various features built-in for fact-checking organizations. Dega supports managing multiple organizations and sites from the same portal.</p> 
      <p>It is developed for modern web features with all the publishing best practices built-in. The tool is written in Go & React.</p>`,
      image: "/assets/images/creation.png",
    },
  ]
  return (
    <section>
      <div sx={{
        px: '2rem',
        py: '5rem',
        '.product-card:nth-child(even)': {
          backgroundColor: '#F9F9F9',
          '.image-container': {
            order: [0, null, 2]
          }
        }
      }}>
        {services.map((service) => (
          <Service data={{ ...service }} />))}
      </div>
    </section>
  )
}

export default Services
