/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'


const Value = ({ data }) => {
  const { image, title, description, backgroundColor } = data
  return (
    <div sx={{ background: backgroundColor, p: '42px' }}>
      <div sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img src={image} alt="" />
        <h2 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: '26px',
          lineHeight: '30px',
          color: '#1E1E1E'

        }}>{title}</h2>
      </div>
      <p sx={{
        ontFamily: 'Inter',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#667085',
        mt: '20px'
      }}>{description}</p>
    </div>
  )
}

export default Value