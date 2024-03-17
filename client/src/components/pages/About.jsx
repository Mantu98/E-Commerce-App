import React from 'react'
import Layout from '../layouts/Layout'

function About() {
  return (
      <Layout title={'about us'}>
           <div className='row contactus'>
            <div className='col-md-5'>
              <img src="/images/about.jpeg" 
                  alt="contactus"
                  style={{width: '100%'}}
              />
            </div>
            <div className='col-md-4 text-center mt-4'>  
              <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis expedita reiciendis aliquid. Eveniet, perspiciatis. Repudiandae ducimus, quam reiciendis quos excepturi dolorem eum architecto mollitia hic autem quia perspiciatis corporis eos et eaque, expedita numquam ut ex? Vel, laudantium. Fugiat dicta omnis nemo mollitia, dolor quos ad ratione unde hic sapiente doloremque alias quis officia, obcaecati ut. Aperiam odit hic itaque omnis, quos in voluptatum voluptas, consequatur et dolore amet, modi soluta doloremque officiis cumque.
              </p>
            </div>
          </div>
    </Layout>
  )
}

export default About;