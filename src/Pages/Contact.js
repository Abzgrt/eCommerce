import React from 'react';
import { useDispatch,useSelector}  from 'react-redux';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../Components/Container';
import { createQuery } from '../features/contact/contactSlice';
import * as yup from 'yup';
import {useFormik} from 'formik';

const contactSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup.string().required("Email addresss is required!"),
  phone: yup.string().required("Phone number is required!"),
  comment: yup.string().required("You should provide a comment!"),
})
function Contact() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      dispatch(createQuery(values));
    }
  })
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
                <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                  <div>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                    <div className="errors"></div>
                    <div className="errors mt-3">
                      {formik.touched.name && formik.errors.name}
                    </div>              
                  </div>
                  <div>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className="errors mt-3">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={formik.handleChange("phone")}
                      onBlur={formik.handleBlur("phone")}
                    />
                    <div className="errors mt-3">
                      {formik.touched.phone && formik.errors.phone}
                    </div>
                  </div>
                  <div>
                    <textarea 
                      name="comment" 
                      id="" 
                      className='w-100 form-control' 
                      cols="30" 
                      rows="4" 
                      placeholder="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    ></textarea>
                    <div className="errors mt-3">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div> 
                  <div>
                    <button type="submit" className="button border-0">Submit</button>
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
