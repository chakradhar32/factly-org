/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const IntroSection = () => {
  return (
    <div sx={{
      maxWidth: '1190px',
      mx: 'auto',
      my: '42px'
    }}>
      <h2 sx={{
        fontFamily: 'Montserrat',
        fontSize: '36px',
        color: '#CE212B',
        fontWeight: '600',
        mb: '32px'
      }}>Recents</h2>
      <div sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '62px'
      }}>
        <div sx={{ width: '764px' }}>
          <img src="/assets/images/cloud.png" alt="" />
          <h3 sx={{ fontSize: '26px', fontW: '600', my: '16px' }}>Lorem Ipsum dolor ultra century tyioka buyal juina</h3>
          <p>Introduction to Wireframing and its Principles. Learn from the best in the industry. How do you <br></br>create compelling presentations that wow your colleagues and impress your managers?</p>
        </div>
        <div sx={{ width: '336px', display: 'flex', flexDirection: 'column' }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <img src="/assets/images/share.png" alt="" />
            <h4>Lorem Ipsum dolor ultra century tyioka buyal juin</h4>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '42px'
          }}>
            <img src="/assets/images/mobile.png" alt="" />
            <h4>Lorem Ipsum dolor ultra century tyioka buyal juin</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection