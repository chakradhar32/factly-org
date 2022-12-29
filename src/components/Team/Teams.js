/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Team from './Team'


const Teams = () => {

  const teams = [
    {
      image: "/assets/images/teams.png",
      title: "Organization Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/details"
    },
    {
      image: "/assets/images/teams.png",
      title: "Newsroom Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/teams.png",
      title: "Fact-check Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/teams.png",
      title: "Research Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/teams.png",
      title: "Production Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
    {
      image: "/assets/images/teams.png",
      title: "Technology Team",
      description: "Lorem ipsum dolor ultra century lingiunl and bilingual text.",
      link: "/"
    },
  ]
  return (
    <section>
      <div sx={{
        maxWidth: '1164px', mx: 'auto', display: 'grid', py: '100px',
        px: ['32px', null, null, '0px'],
        gridTemplateColumns: 'repeat(auto-fit, minmax(337px, 1fr))',
        gridGap: '76px'
      }}>
        {teams.map((team) => (
          <Team data={{ ...team }} />
        ))}
      </div>
    </section>
  )
}

export default Teams