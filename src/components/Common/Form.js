/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import BackgroundPattern from '../Common/BackgroundPattern'


const Form = () => {
  return (
    <section sx={{
      bg: '#688678',
      px: ['0px', null, '100px'],
      py: '60px',
      mt: ['80px', null, '200px'],
      position: 'relative'
    }}>
      <div sx={{
        display: ['none', null, 'flex'],
        maxWidth: '1080px',
        mx: 'auto',
      }}>
        <BackgroundPattern />
        <div sx={{
          maxWidth: '45%',
          flex: '1 0 45%'
        }} >
          <div>
            <h1 sx={{
              color: '#F8F8F8', fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '60px',
              lineHeight: '82px'
            }}>
              We are here to help you know the facts.
            </h1>
          </div>
        </div>
        <div
          sx={{
            p: '2rem',
            width: '100%',
            position: "relative",
            label: {
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',

            },
          }}
        >
          <form sx={{
            position: 'absolute', bottom: '0', bg: '#F6F6F6', px: '68px',
            py: '48px', width: '100%', maxWidth: '550px', boxShadow: '5px 32px 25px rgba(104, 134, 119, 0.23)'
          }} action={''} method="POST">
            <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                  'input, textarea, select': {
                    border: '1px solid #ccc',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                  },
                }}
              >
                <label htmlFor="name">
                  Name
                  <input id="name" type="text" name="name" />
                </label>
                <label htmlFor="name">
                  Email
                  <input id="email" type="email" name="email" />
                </label>
                <label htmlFor="message">
                  Message
                  <textarea name="message" id="message" rows="3"></textarea>
                </label>
                <button sx={{
                  bg: '#CE212B',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  alignSelf: 'flex-start',
                  p: '18px 48px',
                  fontFamily: 'Inter', fontWeight: '700', variant: 'text.normal',
                }}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>



      {/* mobile */}



      <div sx={{ maxWidth: '376px', mx: 'auto', display: ['block', null, 'none',] }}>
        <div>
          <h1 sx={{
            color: '#F8F8F8', fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '48px',
            lineHeight: '74px',
            mb: '2rem'
          }}>
            We are here to help you know the facts.
          </h1>
        </div>
        <div
          sx={{
            width: '100%',
            position: "relative",
            label: {
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',

            },
          }}
        >
          <form sx={{
            position: 'none', bottom: '0', width: '100%', maxWidth: '550px'
          }} action={''} method="POST">
            <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: '100%',
                  'input, textarea, select': {
                    border: '1px solid #FFFFFF',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    background: 'none',
                  },
                  label: {
                    color: '#FFFFFF'
                  }
                }}
              >
                <label htmlFor="name">
                  Name
                  <input id="name" type="text" name="name" />
                </label>
                <label htmlFor="name">
                  Email
                  <input id="email" type="email" name="email" />
                </label>
                <label htmlFor="message">
                  Message
                  <textarea name="message" id="message" rows="3"></textarea>
                </label>
                <button sx={{
                  color: '#CE212B',
                  bg: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  alignSelf: 'flex-start',
                  p: '18px 48px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  fontSize: '20px'
                }}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
