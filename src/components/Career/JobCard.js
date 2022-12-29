/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import ArrowRight from '../../../static/assets/icons/arrow-right-alt.svg'


const JobCard = ({ data }) => {
  const { title, link } = data
  return (
    <div>
      <div sx={{ bg: "#E4E8E8", display: 'flex', justifyContent: 'space-between', mt: '24px', p: '24px 48px', alignItems: 'center' }}>
        <h4 sx={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          variant: 'text.lg',
          lineHeight: '30px',
          color: '#5B5B5B'
        }}>{title}</h4>

        <a href={link} sx={{
          borderRadius: '4px',
          gap: '10px',
          p: '12px 22px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '30px',
          color: '#FFFFFF',
          bg: '#CE212B'
        }}>Apply Now
          <img src={ArrowRight} alt="" />
        </a>

      </div>
    </div>
  )
}

export default JobCard