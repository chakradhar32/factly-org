/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Service = ({ data }) => {
  const { title, description, image } = data
  return (
    <div className='product-card'>
      <div sx={{
        display: 'flex',
        maxWidth: '1060px',
        mx: 'auto',
        py: '48px',
        alignItems: 'center',
        gap: '64px',

      }}>
        <div sx={{
          display: 'flex',
          flexDirection: 'column',
          order: 1,
          maxWidth: 'calc(60% - 64px)',
          flex: 'calc(60% - 64px)'
        }}>
          <div sx={{
            p: {
              FontFamily: 'Inter',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '28px',
              color: '#667085',
              display: 'flex',
              mb: '12px'
            }
          }}>
            <h1 sx={{
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '44px',
              color: '#CE212B',
              mb: '16px'
            }}>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
        <div sx={{ maxWidth: '40%', flex: '1 0 40%' }} className='image-container'>
          <img sx={{ width: '100%' }} src={image} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Service