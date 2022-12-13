/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const BackgroundPattern = ({ color = "#1E1E1E" }) => {
  return (
    <div sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: '0' }}>
      <div className="top-left--box-one" sx={{
        position: 'absolute', top: '0', left: "0", width: '143px',
        height: '37.5px',
        borderRight: `2px solid  ${color} `,
        borderBottom: `2px solid ${color}`,
        borderBottomRightRadius: '19px',
      }}>
      </div>
      <div className="top-left-box-two" sx={{
        position: 'absolute', top: '0', left: "0", width: '85px',
        height: '159px',
        borderRight: `2px solid ${color}`,
        borderBottom: `2px solid ${color}`,
        borderBottomRightRadius: '19px',
      }}></div>
      <div className="top-right-box" sx={{
        position: 'absolute', top: '0', right: "0",
        width: "55px",
        height: "196px",
        borderLeft: `2px solid ${color}`,
        borderBottom: `2px solid ${color}`,
        borderBottomLeftRadius: '19px',
      }}></div>
    </div>
  )
}

export default BackgroundPattern