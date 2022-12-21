/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import JobCard from './JobCard'


const Jobs = () => {

  const jobs = [
    {
      title: 'Customer Service Specialist',
      link: '/',
    },
    {
      title: 'Customer Service Specialist',
      link: '/',
    },
    {
      title: 'Customer Service Specialist',
      link: '/',
    },
    {
      title: 'Customer Service Specialist',
      link: '/',
    },
    {
      title: 'Customer Service Specialist',
      link: '/',
    },
  ]
  return (
    <section sx={{ maxWidth: '904px', mx: 'auto', pt: '60px', pb: '100px' }}>
      <div>
        <h2 sx={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: '38px',
          lineHeight: '28px',
          color: '#CE212B',
          mb: '60px',
          textAlign: 'center'
        }}
        >Available Jobs</h2>
        <div sx={{ width: '100%' }}>
          {jobs.map((job) => (
            <JobCard data={{ ...job }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Jobs