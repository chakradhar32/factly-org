/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import arrowRight from '../../../static/assets/icons/arrow-right.svg'
import SectionHeader from '../Common/SectionHeader'

const WhatWeDo = () => {
  return (
    <section>
      <div sx={{ maxWidth: '1066px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: ['32px', null, null,], pb: '100px' }}>

        <SectionHeader title="What we do?"
          description='Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.' />
        <div>
          <div sx={{
            padding: ['28px', null, null, '0px'],
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(316px, 1fr))',
            gridGap: '48px',
            h1: {
              fontSize: '24px',
              fontFamily: 'Montserrat',
              fontWeight: '600',
              color: '#CE212B'
            },
            p: {
              fontFamily: 'Inter',
              fontWeight: '400',
              variant: 'text.sm',
              color: '#1E1E1E'
            },
            a: {
              color: '#1E1E1E', fontWeight: '700', variant: 'text.sm',
            }
          }}>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/content.png" alt="" />
                <h1>Content Creation</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/content.png" alt="" />
                <h1>Open Data</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/content.png" alt="" />
                <h1>Training</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/content.png" alt="" />
                <h1>Information Tools</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/content.png" alt="" />
                <h1>Research</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src="/assets/icons/content.png" alt="" />
                <h1>Research</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Pellentesque in tellus, lacus massa vels aliquet lacinia.</p>
              <div sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to='#'>Learn more</Link>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo