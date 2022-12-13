/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import linkedIn from '../../../static/assets/icons/linkedin.svg'


const Card = ({ data }) => {
  const { image, name, position, link } = data
  return (
    <div>
      <div sx={{ display: 'flex' }}>
        <div sx={{ display: 'flex', flexDirection: 'column', 'h4,a': { fontFamily: 'Inter', } }}>
          <div>
            <img src={image} alt="" />
          </div>
          <div sx={{
          }}>
            <h1 sx={{
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '26px',
              lineHeight: '28px',
              color: '#CE212B',
              mt: '42px'
            }}>{name}</h1>
            <h4 sx={{
              fontWeight: '400',
              fontSize: '20px',
              color: '#6C6C6C',
              my: '16px'
            }}>{position}</h4>
          </div>
          <div sx={{ border: '1px solid #C2C2C2' }}></div>
          <div sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px' }}>
            <Link to={link} sx={{ display: 'flex', textDecoration: 'underline', fontSize: '16px', color: '#6C6C6C', fontWeight: '500' }}>Read more</Link>
            <img src={linkedIn} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card