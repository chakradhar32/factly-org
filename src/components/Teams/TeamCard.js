/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'


const TeamCard = ({ data }) => {
  const { image, name, description, slug } = data
  return (
    <div>
      <div sx={{ display: 'flex' }}>
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <div sx={{
              p: {
                FontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '28px',
                color: '#667085'
              }
            }}>
              <h1 sx={{
                fontFamily: 'Montserrat',
                fontWeight: '600',
                fontSize: '26px',
                lineHeight: '28px',
                color: '#1E1E1E',
                mt: '16px'
              }}>{name}</h1>
              <div sx={{
                fontFamily: 'Inter',
                fontWeight: '400',
                variant: 'text.sm',
                color: '#667085',
                mt: '16px',
              }} dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div sx={{ mt: '16px' }}>
              <Link to={slug} sx={{
                px: '20px', py: '10px', bg: '#F6F0F0', color: '#CE212B', fontFamily: 'Inter',
                fontWeight: '500',
                variant: 'text.sm',
                borderRadius: '4px'
              }}>See all members</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard