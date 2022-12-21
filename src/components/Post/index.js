/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'

const index = () => {
  return (
    <section sx={{
    }}>
      <div sx={{
        maxWidth: '1100px',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        mt: '5rem'
      }}>
        <div sx={{
          maxWidth: 'calc(50% - 32px)',
          flex: '1 0 calc(50% - 32px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h2 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '42px',
            color: '#101828',
            lineHeight: 'initial'
          }}>How collaboration makes us better analogy of the anatomy designers?</h2>
          <p sx={{
            fontFamily: 'Inter',
            fontWeight: '400',
            fontSize: '20px',
            color: '#667085',
            lineHeight: '30px'
          }}>How do you create compelling wireframes that wow your colleagues and impress your managers? Here’s how to get started.</p>
          <div sx={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <img src="/assets/images/author.png" alt="" />
            <div sx={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Olivia Rhye</h4>
              <h4 sx={{ color: '#667085', }}>20 Jan 2022</h4>
            </div>
          </div>
        </div>
        <div sx={{ maxWidth: 'calc(50% - 24px)', flex: '1 0 calc(50% - 24px)' }}>
          <img sx={{
            width: '536px',
            height: '426px'
          }} src="/assets/images/postImg.png" alt="" />
        </div>
      </div>
      <div sx={{
        maxWidth: '806px', mx: 'auto',
        py: '100px',
        'p,li': {
          fontFamily: 'inter',
          fontSize: '18px',
          fontWeight: '400',
          color: '#6C6C6C',
        },
        h2: {
          fontFamily: 'Montserrat',
          fontSize: '30px',
          fontWeight: '600',
          color: '#1E1E1E'
        },
      }}>
        <p sx={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p>
        <div sx={{
          display: 'flex', flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 sx={{ mt: '48px' }}>Introduction</h2>
          <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. </p>
          <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p>
        </div>
        <div sx={{ my: '24px' }}>
          <img src="/assets/images/office.png" alt="" />
        </div>
        <div sx={{ my: '48px', display: 'flex', gap: '20px' }}>
          <div sx={{ width: "4px", alignSelf: 'stretch', background: '#CE212B', height: '180px' }}></div>
          <div>
            <blockquote sx={{
              fontFamily: 'Inter',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '36px',
              color: '#101828'

            }}>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</blockquote>
            <h4 sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#6C6C6C',
              mt: '32px'
            }}>— Olivia Rhye, Product Designer</h4>
          </div>
        </div>
        <div sx={{
          display: 'flex', flexDirection: 'column',
          gap: '16px'
        }}>
          <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
          <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
          <p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
        </div>
        <div>
          <h2 sx={{ my: '18px' }}>Software & tools</h2>
          <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
        </div>
        <div sx={{
          display: 'flex', flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 sx={{ mt: '48px' }}>Other resources</h2>
          <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>
          <ol>
            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
          </ol>
        </div>
        <div sx={{
          display: 'flex', flexDirection: 'column',
          gap: '16px'
        }}>
          <img sx={{ mt: '48px' }} src="/assets/images/office1.png" alt="" />
          <p>Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.</p>
          <p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
        </div>
        <div sx={{
          display: 'flex', flexDirection: 'column',
          gap: '16px'
        }}>
          <h2 sx={{ mt: '48px' }}>Conclusion</h2>
          <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
          <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
          <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
          <p>Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
        </div>
      </div>
      <div sx={{ maxWidth: '1100px', mx: 'auto', pb: '100px' }}>
        <h3 sx={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '36px',
          color: '#CE212B',
          mb: '32px'
        }}>Recent Blogs</h3>
        <div sx={{
          display: 'flex', gap: '70px',
          h4: { mt: '16px', color: '#667085', fontSize: '16px' },
          h3: { mt: '16px', fontFamily: 'Montserrat', fontSize: '26px', fontWeight: 600 },
          p: { my: '16px' },
          a: {
            cursor: 'pointer',
            color: '#CE212B',
            background: '#F7F0F0',
            borderRadius: '4px',
            p: '10px 20px'
          }
        }}>
          <div sx={{ p: { width: '316px', color: '#667085', fontFamily: 'inter' } }}>
            <img src="/assets/images/postImg.png" alt="" />
            <h4>Sep 12, 22</h4>
            <h3>What is Wireframing?</h3>
            <p>Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
            <Link>
              Read More</Link>
          </div>
          <div sx={{ p: { width: '316px', color: '#667085', fontFamily: 'inter' } }}>
            <img src="/assets/images/postImg2.png" alt="" />
            <h4>Sep 12, 22</h4>
            <h3>What is Wireframing?</h3>
            <p>Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
            <Link>Read More</Link>
          </div>
          <div sx={{ p: { width: '316px', color: '#667085', fontFamily: 'inter' } }}>
            <img src="/assets/images/postImg3.png" alt="" />
            <h4>Sep 12, 22</h4>
            <h3>What is Wireframing?</h3>
            <p>Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
            <Link>Read More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index