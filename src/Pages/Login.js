import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import CustomInput from "../Components/CustomInput";
import {loginUser} from "../features/user/userSlice";
import Container from '../Components/Container';

import { useFormik } from "formik";
import * as yup from "yup";


const LoginSchema = yup.object().shape({
  email: yup
       .string()
       .email("mail should be valid!")
       .required("Email Address is required!"),
  password: yup
       .string()
       .required("Password is required!"),
});
const Login = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
     dispatch(loginUser(values));
    }
  });
  return (
    <>
      <Meta title='Login' />
      <BreadCrumb title='Login'/>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                <CustomInput 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  className='form-control' 
                  onChange={ formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput 
                  type="empasswordail" 
                  name="password" 
                  placeholder="Password" 
                  className='form-control' 
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <Link to="/forgot-password"> Forgot Password ?</Link>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0" type='submit'>Login</button>
                    <Link to='/signup' className='button signup'>SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
