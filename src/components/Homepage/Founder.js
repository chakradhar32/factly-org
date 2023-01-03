/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import BackgroundPattern from '../Common/BackgroundPattern'


const Founder = () => {
  return (
    <section sx={{ p: ['none', null, '80px'] }}>
      <div sx={{
        maxWidth: '1244px',
        mx: 'auto',
        display: ['none', null, 'flex'],
        alignItems: 'center',
        bg: '#1E1E1E',
        px: '100px',
        py: '64px',
        position: 'relative',
      }}
      >
        <BackgroundPattern
          color='#E6E3D9'
        />
        <div sx={{
          maxWidth: '55%',
          flex: '1 0 55%',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          'h6, p': {
            variant: 'text.normal', fontFamily: 'Inter', fontWeight: '400', color: ' #E6E3D9',
            h4: { fontFamily: 'Inter' }
          }
        }}>
          <div>
            <h1 sx={{ fontSize: '50px', fontWeight: '600', fontFamily: 'Montserrat', color: '#CE212B', lineHeight: '44px' }}>Information is power</h1>
          </div>
          <div>
            <p>Data is at the core of Factly Media and Research. We are open data evangelists and promote data literacy.</p>
            <p sx={{ mt: '16px' }}>We believe authentic data is the first step towards developing transparent systems.</p>
          </div>
          <div>
            <h4 sx={{ variant: 'text.normal', color: '#CE212B' }}>— RAKESH DUBBUDU</h4>
            <h6 sx={{ variant: 'text.sm', }}>Founder, Factly Media and Research</h6>
          </div>
        </div>
        <div sx={{ flex: '1 0 45%', maxWidth: '45%', position: 'relative', height: '100%', alignSelf: "flex-end" }}>
          <img sx={{ position: 'absolute', bottom: '-64px' }} src="assets/images/founder.png" alt="" />
        </div>
      </div>


      {/* mobile */}


      <div sx={{
        display: ['block', null, 'none'],
        //maxWidth: '432px',
        bg: '#1E1E1E',
        px: '40px',
        py: '60px',
        'h3,h4': {
          color: '#CE212B',
        },
        'h6,p': {
          color: '#E6E3D9',
        }
      }}>
        <h3 sx={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '44px'
        }}>Information is power</h3>
        <div sx={{ my: '32px' }}>
          <p sx={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px'
          }}>Data is at the core of Factly Media and Research. We are open data evangelists and promote data literacy.</p>
          <p sx={{ mt: '18px' }}>We believe authentic data is the first step towards developing transparent systems.</p>
        </div>
        <div sx={{ display: 'flex', gap: '16px' }}>
          <img src="/assets/images/founder2.png" alt="" />
          <div>
            <h4 sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px'
            }}>Rakesh Dubbudu</h4>
            <h6 sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '22px'
            }}>Founder, Factly Media and Research</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder