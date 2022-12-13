/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import BackgroundPattern from './BackgroundPattern'
import SectionHeader from './SectionHeader'

const Header = ({ title, description }) => {
  return (
    <header sx={{ maxWidth: '1316px', mx: 'auto', bg: '#CCD9D2', position: 'relative' }}>
      <BackgroundPattern />
      <SectionHeader
        title={title}
        description={description}
      />
    </header>
  )
}

export default Header