/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import SectionHeader from '../Common/SectionHeader'

const Support = () => {
  return (
    <section sx={{ bg: '#F8F8F8', py: ['0px', null, '60px'], px: ['0px', null, null, '100px'] }}>
      <div
        sx={{ maxWidth: '960px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: '54px' }}>
        <SectionHeader
          title='Over 20 partners and supporters'
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s'"
        />
        <div sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          alignItems: 'center',
          px: '32px',
          justifyContent: 'center',
          img: { display: 'block' }
        }}>
          <img src="/assets/icons/IFCN.png" alt="" />
          <img src="/assets/icons/digital.png" alt="" />
          <img src="/assets/icons/Govt.png" alt="" />
          <img src="/assets/icons/data.png" alt="" />
          <img src="/assets/icons/inshorts.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Support