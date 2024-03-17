import React from 'react'
import Layout from '../layouts/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

function Contact() {
  return (
      <Layout title={'contact us'}>
          <div className='row contactus'>
            <div className='col-md-6'>
              <img src="/images/contact.jpeg" 
            alt="contactus"
            style={{width: '100%'}}
              />
            </div>
            <div className='col-md-4 mt-5'> 
              <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
              <p className='text-justify mt-2'>any query and info about prodduct feel free to call anytime we 24x7 available</p>
              
              <p className='mt-3'><BiMailSend /> : www.help@contactcenter.com</p>
              
              <p className='mt-3'><BiPhoneCall /> : 012-12345689</p>
              
              <p className='mt-3'><BiSupport /> : 1800-0000-0000</p>
            </div>
          </div>
      </Layout>
  )
}

export default Contact