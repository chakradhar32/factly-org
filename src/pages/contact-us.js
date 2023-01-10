import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/Contact/ContactForm'
import { Seo } from '../components/Seo'

const ContactUsPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us | Factly Orgaisation"
        description=""
      />
      <ContactForm />
    </Layout>
  )
}

export default ContactUsPage