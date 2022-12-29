/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const SectionHeader = ({ title, description }) => {
  return (
    <>
      <div sx={{ maxWidth: '768px', mx: 'auto', py: '82px', px: ['32px', null, null, '0px'] }}>
        <h1 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          variant: 'text.xl',
          lineHeight: '44px',
          textAlign: 'center',
          color: '#CE212B',
          mb: '20px'
        }}>{title}</h1>
        <p sx={{
          fontFamily: 'Inter',
          fontWeight: '400',
          variant: 'text.normal',
          textAlign: 'center',
          color: '#1E1E1E'
        }}>{description}</p>

      </div>

    </>
  )
}

export default SectionHeader