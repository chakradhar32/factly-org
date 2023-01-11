/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { useState } from 'react';
import { jsx } from 'theme-ui';
import Modal from 'react-modal';
import linkedIn from '../../../static/assets/icons/linkedin.svg';
import modalIcon from '../../../static/assets/icons/modal-icon.svg';
import { FaTimes } from 'react-icons/fa';
import close from '../../../static/assets/icons/close.svg'


const MemberCard = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');

  function openModal(content) {
    setContent(content);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }




  const { image, name, position, link } = data
  return (
    <div>
      <div sx={{ display: 'flex' }}>
        <div sx={{ display: 'flex', flexDirection: 'column', 'h4,a': { fontFamily: 'Inter', } }}>
          <div>
            <img src={image} alt="" />
          </div>
          <div sx={{
          }}>
            <h1 sx={{
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: '26px',
              lineHeight: '28px',
              color: '#CE212B',
              mt: '42px'
            }}>{name}</h1>
            <h4 sx={{
              fontWeight: '400',
              variant: 'text.normal',
              color: '#6C6C6C',
              my: '16px'
            }}>{position}</h4>
          </div>
          <div sx={{ border: '1px solid #C2C2C2' }}></div>
          <div sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px' }}>
            <a href={link} onClick={() => openModal()}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                textDecoration: 'underline',
                variant: 'text.sm',
                color: '#6C6C6C',
                fontWeight: '500'
              }}>Read more</a>
            <img src={linkedIn} alt="" />
          </div>
        </div>
      </div>

      {/* <div id="modal"></div> */}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              zIndex: '99999',
              top: '55%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              overflowY: 'auto',
              maxWidth: '860px',
              maxHeight: '120vh',
              padding: '60px'
            },
          }}
        >
          <div sx={{ display: 'flex', gap: '32px' }}>
            <img src="/assets/images/bharath.png" alt="" />
            <div>
              <div sx={{ display: 'flex', gap: '12px' }}>
                <div sx={{ width: "3px", alignSelf: 'stretch', background: '#CE212B' }}></div>
                <div>
                  <h2 sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: '24px',
                    color: '#CE212B'
                  }}>Rakesh Dubbudu</h2>
                  <h4 sx={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: '#6C6C6C'
                  }}>
                    Founder, Factly
                  </h4>
                </div>
              </div>
              <p sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                my: '24px',
                color: '#6C6C6C'
              }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae.</p>
              <div sx={{ display: 'flex', gap: '12px' }}>
                <p sx={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '18px',
                  color: '#1E1E1E'
                }}>Find me on</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <img src={modalIcon} alt="" />
                </a>
              </div>
            </div>
            {/* <button
              sx={{
                all: 'unset',
                p: '0.5rem',
                cursor: 'pointer',
                color: '#667085'
              }}
              onClick={() => ((prev) => !prev)}
            >
              <img sx={{
                width: '48px',
                height: '48px',
              }} src={close} alt="" />
            </button> */}
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Modal>
      </div>
    </div>
  )
}

export default MemberCard