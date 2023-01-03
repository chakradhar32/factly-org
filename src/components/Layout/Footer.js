/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { GoMail } from 'react-icons/go'
import { FaPhone } from 'react-icons/fa'
import { jsx } from 'theme-ui';

const Footer = () => {
  return (
    <footer sx={{
      bg: '#1E1E1E',
    }}>
      <div sx={{ display: ['none', null, 'block'] }}>
        <div sx={{
          maxWidth: '1280px',
          mx: 'auto',
          display: 'flex',
          py: '60px',
          px: '80px',
          justifyContent: 'space-between',
          borderBottom: '1px solid #CE212B',
          a: {
            color: '#fff',
          }
        }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '308px',
            gap: '12px',
            color: '#fff',
            fontSize: '14px',
            a: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }
          }}>
            <Link to='/'>
              <img src="/assets/images/footer-logo.png" alt="" />
            </Link>
            <p>
              Factly media is an organisation founded
              in 2014 to make public data meaningful.
            </p>
            <a href="">
              <GoMail /> info@factlymedia.com
            </a>
            <a href="tel:+91 1234567890">
              <FaPhone /> +91 1234567890
            </a>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '102px',
            justifyContent: 'center',
            gap: '10px',
            a: {
              textDecoration: 'none',

            }
          }}>
            <a href="#">About Factly</a>
            <a href="#">Team</a>
            <a href="#">Partners</a>
            <a href="#">Accolades</a>
            <a href="#">Careers</a>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '102px',
            justifyContent: 'center',
            gap: '10px',
            a: {
              textDecoration: 'none',
            }
          }}>
            <a href="#">About Factly</a>
            <a href="#">Team</a>
            <a href="#">Partners</a>
            <a href="#">Accolades</a>
            <a href="#">Careers</a>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '102px',
            justifyContent: 'center',
            gap: '10px',
            a: {
              textDecoration: 'none',
            }
          }}>
            <a href="#">About Factly</a>
            <a href="#">Team</a>
            <a href="#">Partners</a>
            <a href="#">Accolades</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <p sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1280px',
          mx: 'auto',
          py: '24px',
          px: '48px',
          color: '#fff'
        }}>
          © Factly Media & Research, 2022. All rights reserved.
        </p>
      </div>

      {/* mobile */}
      <div sx={{ display: ['block', null, 'none'] }}>
        <div sx={{
          maxWidth: '376px',
          mx: 'auto',
          display: "flex",
          flexDirection: "column",
          gap: '4rem',
          a: {
            color: '#FFFFFF'
          },
          py: '60px',
          borderBottom: '1px solid #CE212B',
        }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '308px',
            gap: '20px',
            color: '#fff',
            a: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }
          }}>
            <Link to='/'>
              <img src="/assets/images/footer-logo.png" alt="" />
            </Link>
            <p>
              Factly media is an organisation founded
              in 2014 to make public data meaningful.
            </p>
            <a href="">
              <GoMail /> info@factlymedia.com
            </a>
            <a href="tel:+91 1234567890">
              <FaPhone /> +91 1234567890
            </a>
          </div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#FFFFFF',
            a: {
              mt: '24px',
              '&:hover': { color: '#CE212B' }
            }
          }}>
            <Link to='/work'>Our Work</Link>
            <Link to='/team'>Company</Link>
            <Link to=''>Impact</Link>
            <Link to=''>Accolades</Link>
            <Link to='/blog'>Blog</Link>
          </div>
        </div>
        <p sx={{
          fontFamily: 'inter',
          fontSize: '14px',
          lineHeight: '22px',
          color: '#fff',
          textAlign: 'center',
          pt: '2rem',
          pb: '4rem',
          maxWidth: '376px',
          mx: 'auto'
        }}>
          © Factly Media & Research, 2022. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer