/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const BackgroundPattern = ({ color = "#1E1E1E" }) => {
  return (
    <div sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: '0' }}>
      <div className="top-left--box-one" sx={{
        position: 'absolute', top: '0', left: "0", width: ['82px', null, '143px'],
        height: ['22px', null, '37.5px'],
        borderRight: `2px solid  ${color} `,
        borderBottom: `2px solid ${color}`,
      }}>
      </div>
      <div className="top-left-box-two" sx={{
        position: 'absolute', top: '0', left: "0", width: ['50px', null, '85px'],
        height: ['66px', null, '159px'],
        borderRight: `2px solid ${color}`,
        borderBottom: `2px solid ${color}`,
      }}></div>
      <div className="top-right-box" sx={{
        position: 'absolute', top: '0', right: "0",
        width: ['32px', null, "55px"],
        height: ["82px", null, '196px'],
        borderLeft: `2px solid ${color}`,
        borderBottom: `2px solid ${color}`,
      }}></div>
    </div>
  )
}

export default BackgroundPattern