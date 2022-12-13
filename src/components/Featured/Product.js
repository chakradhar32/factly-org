/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import arrowTop from '../../../static/assets/icons/arrow-top.svg'


const Product = ({ data }) => {
  const { title, description, image, status, link } = data
  return (
    <div className='product-card'>
      <div sx={{ display: 'flex', gap: '64px', py: '48px', alignItems: 'center', maxWidth: '1060px', mx: 'auto', }}>
        <div sx={{
          display: 'flex', flexDirection: 'column', order: 1,
          maxWidth: 'calc(60% - 64px)',
          flex: '1 0 calc(60% - 64px)',
          a: { fontSize: '16px', color: '#1E1E1E', fontFamily: 'inter', fontWeight: '500' }
        }}>
          <div sx={{
            p: {
              FontFamily: 'Inter',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '28px',
              color: '#667085',
              mt: '12px'
            }
          }}>
            <h1 sx={{
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '44px',
              color: '#CE212B'
            }}>{title}</h1>
            <div sx={{ mt: '16px' }} dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div sx={{
            display: 'flex',
            gap: '24px',
            mt: '16px',
            alignItems: 'center',
          }}>
            <div sx={{
              display: 'flex',
              padding: '10px 20px',
              gap: '10px',
              background: '#F6F0F0',
              borderRadius: '4px'
            }}>
              <Link to={link} >Learn more</Link>
              <img src={arrowTop} alt="" />
            </div>
            <div sx={{ width: "2px", alignSelf: 'stretch', background: '#6C6C6C' }}>
            </div>
            <h4 sx={{
              fontFamily: 'Inter',
              fontWeight: '500',
              fontSize: '16px',
              color: '#1E1E1E'
            }}>Maturity: {status}</h4>
          </div>
        </div>
        <div className='image-container' sx={{ maxWidth: '40%', flex: '1 0 40%' }} >
          <img sx={{ width: '100%' }} src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Product