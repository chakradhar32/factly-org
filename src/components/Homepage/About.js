/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'


const About = () => {
  return (
    <section sx={{
      bg: '#CE212B',
      color: '#F8F8F8',
      backgroundImage: `url('assets/images/about.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left 87px bottom -10%'
    }}>
      <div sx={{
        maxWidth: '1180px', mx: 'auto', py: '100px', display: 'flex', flexDirection: 'column', gap: '80px', p: {
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '30px'
        }
      }}>
        <div sx={{
          textAlign: 'center',
        }}>
          <h1 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '44px',
            mb: '20px'
          }}>About Factly</h1>
          <p>Factly Labs is the technology wing at Factly that works on various solutions for Journalism Tech. Factly Labs was started to primarily address the technolgy needs at Factly, but we quickly realized that the solutions developed for Factly addressed similar problems across other media organisations. </p>
        </div>
        <div sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '32px',
          h1: { fontSize: '24px', fontWeight: '600', fontFamily: 'Montserrat', },
          p: { fontFamily: 'Inter', fontWeight: '400', fontSize: '16px' }
        }}>
          <div sx={{
            maxWidth: 'calc(65% - 16px)',
            flex: '1 0 calc(65% - 16px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            p: { fontSize: '16px' },
            img: { height: '77px', width: '77px' },
          }}>
            <div sx={{ display: 'flex', gap: '28px' }}>
              <img src="/assets/icons/content-one.png" alt="" />
              <div>
                <h1>Mission</h1>
                <p>Factly strives to cultivate civic participation and engaging citizens in accessing, understanding and using important government  data/information at various levels.</p>
              </div>
            </div>
            <div sx={{ display: 'flex', gap: '28px' }}>
              <img src="/assets/icons/content-one.png" alt="" />
              <div>
                <h1>Vision</h1>
                <p>Factly will strive to transform the public information landscape in India by improving access & understanding of the common public about important government data/information and evolve into a reliable and significant resource in the context of public information &  governance.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/factly.png" alt="" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default About