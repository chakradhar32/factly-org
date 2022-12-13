/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import BackgroundPattern from '../Common/BackgroundPattern'


const Founder = () => {
  return (
    <section sx={{ p: '80px' }}>
      <div sx={{
        maxWidth: '1244px',
        mx: 'auto',
        display: 'flex',
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
            fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', color: ' #E6E3D9',
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
            <h4 sx={{ fontSize: '20px', color: '#CE212B' }}>— RAKESH DUBBUDU</h4>
            <h6 sx={{ fontSize: '16px' }}>Founder, Factly Media and Research</h6>
          </div>
        </div>
        <div sx={{ flex: '1 0 45%', maxWidth: '45%', position: 'relative', height: '100%', alignSelf: "flex-end" }}>
          <img sx={{ position: 'absolute', bottom: '-64px' }} src="assets/images/founder.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Founder