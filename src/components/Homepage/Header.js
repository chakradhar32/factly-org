/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'

const Header = () => {
  return (
    <section sx={{
      backgroundImage: `url('assets/images/header.png')`,
      padding: '100px'
    }}>
      <div sx={{
        maxWidth: '1190px',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div sx={{ maxWidth: 'calc(40% - 12px)', flex: '1 0 calc(40% - 12px)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 sx={{
            fontFamily: 'poppins',
            fontWeight: '500',
            fontSize: '68px',
            color: '#1E1E1E',
            lineHeight: '81px'
          }}>Making <span sx={{ color: '#CE212B' }}>Data</span> Meaningful</h1>
          <p sx={{
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '20px',
            color: '#1E1E1E',
            lineHeight: '30px'
          }}>Embracing data, technology and journalism to increase public awareness and empower them to make right decisions.</p>
          <Link
            to="/"
            sx={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              bg: '#CE212B',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              filter: 'drop-shadow(3px 4px 22px rgba(185, 84, 89, 0.52))',
              p: '18px 32px',
              fontFamily: 'Inter', fontWeight: '700', fontSize: '20px'
            }}>
            Learn more
          </Link>
        </div>
        <div sx={{ maxWidth: 'calc(60% - 12px)', flex: '1 0 calc(60% - 12px)' }}>
          <img src="assets/images/header1.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Header