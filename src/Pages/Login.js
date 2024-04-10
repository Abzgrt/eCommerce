import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import CustomInput from '../Components/CustomInput';
import { loginUser } from '../features/user/userSlice';
import Container from '../Components/Container';

import * as yup from 'yup';
import { useFormik } from 'formik';

let LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    } else {
      navigate('');
    }
  },[isSuccess]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15" onSubmit={formik.handleSubmit}>
                <CustomInput
                  type="email"
                  name="email"
                  label="Email Address"
                  classname="form-control"
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  value={formik.values.email}
                />
                <div className="errors mt-2">
                  {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div className="password-wrapper">
                  <CustomInput
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    label="Password"
                    classname="form-control"
                    onChange={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    value={formik.values.password}
                  />
                  <span className="password-toggle" onClick={togglePasswordVisibility}>
                    {passwordVisible ? (
                      <i className="fas fa-eye-slash"></i>
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </span>
                </div>
                <div className="errors mt-2">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <Link to="/forgot-password"> Forgot Password ?</Link>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;