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
        maxWidth: '1180px',
        mx: 'auto',
        py: ['40px', null, '100px'],
        px: ['40px', '40px', null],
        display: 'flex',
        flexDirection: 'column',
        gap: ['40px', null, '80px',],
        p: {
          fontFamily: 'Inter',
          fontWeight: '400',
          variant: 'text.normal',
          lineHeight: '30px'
        }
      }}>
        <div sx={{
          textAlign: 'center',
          px: ['32px', null, '0px']
        }}>
          <h1 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            variant: 'text.xl',
            lineHeight: '44px',
            mb: '20px',
          }}>About Factly</h1>
          <p>Factly Labs is the technology wing at Factly that works on various solutions for Journalism Tech. Factly Labs was started to primarily address the technolgy needs at Factly, but we quickly realized that the solutions developed for Factly addressed similar problems across other media organisations. </p>
        </div>
        <div sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          px: ['null', null, '48px'],
          gap: '32px',
          h1: { fontSize: '24px', fontWeight: '600', fontFamily: 'Montserrat', },
          p: { fontFamily: 'Inter', fontWeight: '400', variant: 'text.sm', }
        }}>
          <div sx={{
            maxWidth: ['1 0 100%', null, '1 0 calc(65% - 16px)'],
            flex: ['1 0 100%', null, '1 0 calc(65% - 16px)'],
            display: 'flex',
            //px: ['null', null, '32px'],
            order: [1, null, 0],
            flexDirection: 'column',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            p: { variant: 'text.sm' },
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
          <div sx={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: ['1 0 100%', null, '1 0 calc(35% - 16px)'],
            flex: ['1 0 100%', null, '1 0 calc(35% - 16px)'],
          }}>
            <img src="/assets/images/factly.png" alt="" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default About