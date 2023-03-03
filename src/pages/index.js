/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout'
import { jsx } from 'theme-ui';
import Header from '../components/Homepage/Header';
import Support from '../components/Homepage/Support';
import Founder from '../components/Homepage/Founder';
import WhatWeDo from '../components/Homepage/WhatWeDo';
import About from '../components/Homepage/About';
import Values from '../components/Homepage/Values';
import Form from '../components/Common/Form';
import { Seo } from '../components/Seo';


const Homepage = () => {
  return (
    <Layout>
      <Seo
        title="Home | Factly Organisation"
        description=""
      />
      <Header />
      <Support />
      <Founder />
      <WhatWeDo />
      <About />
      <Values />
      <Form />
    </Layout>
  )
}

export default Homepage;