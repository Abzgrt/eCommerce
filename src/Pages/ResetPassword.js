import React from 'react';
import {useDispatch} from "react-redux";
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';
import { resetUserPassword } from '../features/user/userSlice';

import { useFormik } from "formik";
import * as yup from "yup";


const ResetPassSchema = yup.object().shape({
  password: yup
       .string()
       .required("Password is required!"),
  confirmpass: yup
       .string()
       .required("Confirmation password is required!"),
});
  
const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split('/')[2];
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      confirmpass: ""
    },
    validationSchema: ResetPassSchema,
    onSubmit: (values) => {
      dispatch(resetUserPassword({token: getToken, password:values.password}));
     
    },
  })
  return (
    <>
      <Meta title='Reset Password' />
      <BreadCrumb title='Reset Password'/>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Reset Passwordp</h3>
              <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
              <CustomInput 
                  type="password" 
                  name="password" 
                  label="Password" 
                  className='form-control' 
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="errors mt-2">
                  {formik.touched.password && formik.errors.password}
                </div>
               <CustomInput 
                  type="password" 
                  name="confirmpass" 
                  label="Password" 
                  className='form-control' 
                  onChange={formik.handleChange("confirmpass")}
                  onBlur={formik.handleBlur("confirmpass")}
                  value={formik.values.confirmpass}
                />
                <div className="errors mt-2">
                  {formik.touched.confirmpass && formik.errors.confirmpass}
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0 ">Ok</button>
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

export default ResetPassword
