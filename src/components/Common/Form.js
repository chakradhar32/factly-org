/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import BackgroundPattern from '../Common/BackgroundPattern'


const Form = () => {
  return (
    <section sx={{ bg: '#688678', px: '100px', py: '60px', mt: '200px', position: 'relative' }}>
      <div sx={{ display: 'flex', maxWidth: '1080px', mx: 'auto', }}>
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
            // bg: '#F1F1F1',
            p: ['1rem', null, null, '2rem'],
            // maxWidth: '50%',
            // flex: '1 0 50%',
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
                  <input id="message" type="text" name="message" />
                </label>
                <button sx={{
                  bg: '#CE212B',
                  color: '#E6E3D9',
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
    </section>
  );
};

export default Form;






// max-width: 50%;
// flex: 1 0 50%;
// max-width: 45%;
// flex: 1 0 45%;
// }
// Inline #66
// .css-1ydrhsz-Form {
// max-width: calc(50%);
// margin: auto;
// }
// Inline #71
// .css-e8tyx4-Form {
// bottom: -64px;
// bottom: 0;