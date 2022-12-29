/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import SectionHeader from '../Common/SectionHeader'


const Values = () => {
  return (
    <section>
      <div sx={{
        maxWidth: '1180px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        py: '100px',
        p: {
          fontFamily: 'Inter',
          fontWeight: '400',
          lineHeight: '24px',
          color: '#1E1E1E'
        }
      }}>
        <SectionHeader
          title='Core Values'
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <div sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(316px, 1fr))',
          padding: ['28px', null, null, '0px'],
          gridGap: '48px',
          h1: {
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#CE212B'
          },
          p: { variant: 'text.sm' }
        }}>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src="/assets/icons/content.png" alt="" />
              <h1>Responsibility</h1>
            </div>
            <p>Lorem ipsum dolor sit amet conse adipisicing elit. Moltias inventore eveniet provident cum repellat laborum!</p>
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src="/assets/icons/content.png" alt="" />
              <h1>Truthfulness</h1>
            </div>
            <p>Lorem ipsum dolor sit amet conse adipisicing elit. Moltias inventore eveniet provident cum repellat laborum!</p>
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src="/assets/icons/content.png" alt="" />
              <h1>Openness</h1>
            </div>
            <p>Lorem ipsum dolor sit amet conse adipisicing elit. Moltias inventore eveniet provident cum repellat laborum!</p>
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src="/assets/icons/content.png" alt="" />
              <h1>Transparency</h1>
            </div>
            <p>Lorem ipsum dolor sit amet conse adipisicing elit. Moltias inventore eveniet provident cum repellat laborum!</p>
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src="/assets/icons/content.png" alt="" />
              <h1>Commitment</h1>
            </div>
            <p>Lorem ipsum dolor sit amet conse adipisicing elit. Moltias inventore eveniet provident cum repellat laborum!</p>
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src="/assets/icons/content.png" alt="" />
              <h1>Commitment</h1>
            </div>
            <p>Lorem ipsum dolor sit amet conse adipisicing elit. Moltias inventore eveniet provident cum repellat laborum!</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Values