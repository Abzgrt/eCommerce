import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';

import { useFormik } from "formik";
import * as yup from "yup";
import { forgotUserPassword } from '../features/user/userSlice';


const ForgotPassSchema = yup.object().shape({
  email: yup
       .string()
       .email("mail should be valid!")
       .required("Email Address is required!"),
});

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPassSchema,
    onSubmit: (values) => {
      dispatch(forgotUserPassword(values));
     
    },
  })
  return (
    <>
      <Meta title='Forgot Password' />
      <BreadCrumb title='Forgot Password'/>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">We will send you an email to reset your password</p>
              <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
              <CustomInput 
                  type="email" 
                  name="email" 
                  label="Email Address" 
                  className='form-control' 
                  onChange={ formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />  
                <div className="errors mt-2">
                  {formik.touched.email && formik.errors.email}
                </div>                
                <div className="d-flex justify-content-center align-items-center flex-column gap-15 mt-3">
                  <button className="button border-0" type="submit">Submit</button>
                  <Link to="/login"> Cancel</Link>
                </div>                
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword
