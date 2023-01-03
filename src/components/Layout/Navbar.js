/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import {
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';
import { jsx } from 'theme-ui';

const Navbar = () => {
  const menuItems = [
    {
      name: 'Our Work',
      slug: '/work'
    },
    {
      name: 'Products',
      slug: '/'
    },
    {
      name: 'Company',
      slug: '/team'
    },
    {
      name: 'Impact',
      slug: '/'
    },
    {
      name: 'Accolades',
      slug: '/'
    },
    {
      name: 'Blog',
      slug: '/blog'
    },
  ]

  const [mobile, setMobile] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [width, setWidth] = useState(0);

  /**
   * Updates width when resized for responsiveness of menu item
   */
  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
    setMenuVisible(false);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width <= 1366) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);


  return (
    <nav sx={{
      bg: '#FFFFFF',
      mt: '2rem'
    }}>
      <div sx={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1370px',
        alignItems: 'center',
        color: '#1E1E1E',
        mx: 'auto',
        py: '18px',
        px: '32px'
      }}>
        <div>
          <Link to="/">
            <img src="/assets/images/logo.png" alt="" />
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            zIndex: '1000',
            a: {
              color: '#1E1E1E',
              variant: 'text.xs',
              fontWeight: '500',
              padding: '0.75rem 0.5rem',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            },
            'a:hover': {
              color: '#343753',
            },
          }}
        >
          {!mobile &&
            menuItems.map((menuItem) => (
              <div
                key={menuItem.name}
                sx={{
                  position: 'relative',
                  'div a': {
                    display: 'none',
                  },
                  '&:hover': {
                    div: {
                      top: '100%',
                      position: 'absolute',
                      pt: '1rem',
                    },
                    'div a': {
                      background: '#fff',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minWidth: '250px',

                    },
                  },
                }}
              >
                <Link key={menuItem.slug} to={menuItem.slug} title={menuItem.name}>
                  {menuItem.name}
                  {menuItem?.items && <FaChevronDown />}
                </Link>

                {menuItem?.items && (
                  <div className="menuItems">
                    {menuItem.items.map((item) => (
                      <Link key={item.slug} to={item.slug} title={item.name}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          {mobile && (
            <button
              sx={{
                display: ['block', null, 'none'],
                all: 'unset',
                p: '0.5rem',
                cursor: 'pointer',
                color: menuVisible ? '#FFFFFF' : 'inherit'
              }}
              aria-haspopup="true"
              aria-controls="mobile-menu"
              aria-expanded={menuVisible ? 'false' : 'true'}
              onClick={() => setMenuVisible((prev) => !prev)}
            >
              {menuVisible ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
        {menuVisible && (
          <div
            id="mobile-menu"
            aria-expanded={menuVisible ? 'true' : 'false'}
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              height: '100vh',
              bg: '#CE212B',
              zIndex: '999',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            <div
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: '2rem',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                a: {
                  color: '#FFFFFF',
                  variant: 'text.normal',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                'a:hover': {
                  color: '#4B938EE5',
                },
              }}
            >
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.name}
                  sx={{
                    position: 'relative',

                    'div a': {
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      minWidth: '250px',
                    },
                  }}
                >
                  <Link
                    aria-role="menuitem"
                    key={menuItem.slug}
                    to={menuItem.slug}
                    title={menuItem.name}
                  >
                    {menuItem.name}
                  </Link>

                  {menuItem?.items && (
                    <div>
                      {menuItem.items.map((item) => (
                        <Link aria-role="menuitem" key={item.slug} to={item.slug} title={item.name}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        <div sx={{
          display: ['none', null, 'block']
        }}>
          <Link to="/contact-us" sx={{
            bg: '#CE212B',
            color: '#E6E3D9',
            border: 'none',
            borderRadius: '4px',
            p: '10px 20px'
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar