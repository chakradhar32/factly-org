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
        pb: '48px',
        alignItems: 'center',
        gap: '64px',
        flexWrap: 'wrap'
      }}>
        <div sx={{
          display: 'flex',
          flexDirection: 'column',
          order: 1,
          maxWidth: ['1 0 100%', null, '1 0 calc(60% - 64px)'],
          flex: ['1 0 100%', null, '1 0 calc(60% - 64px)']
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
              variant: 'text.xl',
              lineHeight: '44px',
              color: '#CE212B',
              mb: '16px'
            }}>{title}</h1>
            <div sx={{
              // padding: ['3rem', null, null, '2.5rem'],
              // fontSize: ['1.25rem', null, '1.5rem', '1.75rem'],
            }} dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
        <div sx={{
          maxWidth: ['1 0 100%', null, '1 0 calc(40%)'],
          flex: ['1 0 100%', null, '1 0 calc(40%)']
        }} className='image-container'>
          <img sx={{ width: '100%' }} src={image} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Service