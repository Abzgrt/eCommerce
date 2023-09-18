import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../Components/Container';
function Contact() {
  return (
    <>
      <Meta title='Contact Us' />
      <BreadCrumb title='Contact Us'/>
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067817.700535727!2d35.194732805712775!3d9.121546982648395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1635d0cedd6cfd2b%3A0x7bf6a67f5348c55a!2sEthiopia!5e0!3m2!1sen!2snl!4v1693316522643!5m2!1sen!2snl" 
            width="600" 
            height="450" 
            className="border-0 w-100" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control'placeholder='Name'/>
                  </div>
                  <div>
                    <input type="text" className='form-control'placeholder='Email'/>
                  </div>
                  <div>
                    <input type="text" className='form-control'placeholder='Phone Number'/>
                  </div>
                  <div>
                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='comment'></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Keep in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-0 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0'> Arat Kilo</address>
                    </li>
                    <li className='mb-0 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href="tel:+251 0915948189">+251915948189</a>
                    </li>
                    <li className='mb-0 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href="mailto:abhope2022@gmail.com">abhope2022@gmail.com</a>
                    </li>
                    <li className='mb-0 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'>Monday-Friday 10 AM - 8 AM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
