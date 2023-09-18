import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../Components/CustomInput";
import {registerUser} from "../features/user/userSlice";
import Container from '../Components/Container';


const signUpSchema = yup.object({
  firstname: yup.string().required("First name is required!"),
  lastname: yup.string().required("Last name is required!"),
  email: yup.string().nullable().email("mail should be valid!").required("Email Address is required"),
  password: yup.string().required("Password is required"),
  phone: yup.string().required("Phone number is required!"),
});
const Signup = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: ""
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      
      dispatch(registerUser(values));
    }
  });
  
  return (
    <>
      <Meta title='Sign Up' />
      <BreadCrumb title='Sign Up'/>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-15' onSubmit = {formik.handleSubmit}> 
                <CustomInput 
                  type="text" 
                  name="firstname" 
                  placeholder="First Name" 
                  className='form-control'
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                  />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput 
                  type="text" 
                  name="lastname" 
                  placeholder="Last Name" 
                  className='form-control'
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                  />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>      
                <CustomInput 
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  className='form-control'
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>               
                <CustomInput 
                  type="text" 
                  name="password" 
                  placeholder="Password" 
                  className='form-control'
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>  
                <CustomInput 
                  type="text" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className='form-control'
                  value={formik.values.phone}
                  onChange={formik.handleChange("phone")}
                  onBlur={formik.handleBlur("phone")}
                  />
                <div className="error">
                  {formik.touched.phone && formik.errors.phone}
                </div>
                <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                  <button className="button border-0 ">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup
