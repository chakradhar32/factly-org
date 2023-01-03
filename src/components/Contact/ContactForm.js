/** @jsx jsx */
import { jsx } from 'theme-ui';
import Phone from '../../../static/assets/icons/Phone.svg'
import Facebook from '../../../static/assets/icons/facebook.svg'
import Instagram from '../../../static/assets/icons/instagram.svg'
import Email from '../../../static/assets/icons/Email.svg'
import Location from '../../../static/assets/icons/Location.svg'
import Linkedin from '../../../static/assets/icons/Linkedinn.svg'
import Twitter from '../../../static/assets/icons/twitter.svg'


const ContactForm = () => {
  return (
    <section
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: ['2rem', null, '5rem'],
        maxWidth: '1036px',
        margin: 'auto',
        padding: ['2rem', null, null, '2rem'],
        my: ['1rem', null, '3rem'],
        flexWrap: 'wrap',
        order: [0, null, 2]
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '28px',
          maxWidth: ['1 0 100%', null, 'calc(50% - 52px)'],
          flex: ['1 0 100%', null, 'calc(50% - 52px)'],
          flexWrap: 'wrap',
          pr: '32px',
          h4: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
            variant: 'text.normal',
            color: '#5B5B5B'
          }
        }}
      >
        <div>
          <p
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '32px',
              lineHeight: '44px',
              color: '#CE212B'
            }}
          >
            We are here to help you
          </p>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={Phone} alt="" />
          <div sx={{ display: 'flex', flexDirection: 'column', a: { color: '#5B5B5B' } }}>
            <a href="/">+91 7675468964</a>
            <a href="/">+91 9675468964</a>
          </div>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={Email} alt="" />
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <h4>factly@lorem.com</h4>
          </div>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={Location} alt="" />
          <div sx={{ display: 'flex', flexDirection: 'column' }}>
            <h4>Lorem Ipsum, Dolor Ultra Hyderabad</h4>
          </div>
        </div>

        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-start',
            variant: 'text.lg',
            gap: '20px',
            py: '1rem',
            a: {
              color: '#000',
              '&:hover': { color: '#fff' },
            },
          }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img src={Facebook} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img src={Linkedin} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Twitter} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      {/* contact form */}




      <div sx={{
        px: ['24px', null, '48px'],
        py: ['32px', null, '36px'],
        bg: '#F1F1F1',
        maxWidth: ['1 0 100%', null, 'calc(50% - 52px)'],
        flex: ['1 0 100%', null, 'calc(50% - 52px)'],
      }}>
        <form
          action={''} method="POST">
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              'input,textarea,select': {
                padding: '1rem',
                border: '1px solid #7C7C7C',
                display: 'flex',
                width: '100%'
              },
              label: { color: '#5b5B5B' }
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
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
