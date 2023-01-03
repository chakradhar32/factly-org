/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const SectionHeader = ({ title, description }) => {
  return (
    <>
      <div sx={{
        maxWidth: '768px', mx: 'auto',
        py: ['32px', null, '82px'],
        px: ['32px', null, '0px']
      }}>
        <h1 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: ['32px', null, '36px'],
          lineHeight: '44px',
          textAlign: 'center',
          color: '#CE212B',
          mb: '20px'
        }}>{title}</h1>
        <p sx={{
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: ['16px', null, '20px'],
          textAlign: 'center',
          color: '#1E1E1E'
        }}>{description}</p>

      </div>

    </>
  )
}

export default SectionHeader