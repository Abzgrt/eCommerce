import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container'
import {useFormik} from 'formik';
import * as yup from 'yup';
import {updateUserProfile} from '../features/user/userSlice';
import {loginUser} from "../features/user/userSlice";


let ProfileSchema = yup.object().shape({
    firstname: yup
      .string()
      .required("First Name is Required"),
    lastname: yup
      .string()
      .required("Last Name is Required"),
    email: yup
      .string()
      .email("Email should be valid!")
      .required("Last Name is Required"),
    phone: yup
      .string()
      .required("Phone Number is Required"),
  });
const Profile = () => {
    const dispatch = useDispatch();
    
    const userState = useSelector((state) => state.auth.user);
    console.log(userState)
    const [edit, setEdit ] = useState(true);
    const [initialvalues, setInitialValues] = useState()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          firstname: userState?.firstname,
          lastname: userState?.lastname,
          email: userState?.email,
          phone: userState?.phone,
        },
        validationSchema: ProfileSchema,
        onSubmit: (values) => {
          dispatch(updateUserProfile(values));
          setEdit(false)
          window.location.reload()
        }
      });
  return (
    <>
    <BreadCrumb title="My Profile"/>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className='my-3'>Update Profile</h3>
            <FiEdit onClick={() => setEdit(false)} className="fs-3 edit-profile"/>
          </div>
        </div>
        <div className="col-12">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="example1" className="form-label">First Name</label>
            <input 
              type="text" 
              name="firstname"
              className="form-control" 
              id="example1" 
              value={formik.values.firstname} 
              onChange={formik.handleChange("firstname")} 
              onBlur={formik.handleBlur("firstname")} 
              disabled={edit}/>
            <div className="errors mt-2">{formik.touched.firstname && formik.errors.firstname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="example1" className="form-label">Last Name</label>
            <input 
              type="text" 
              name="lastname"
              className="form-control" 
              id="example1" 
              value={formik.values.lastname} 
              onChange={formik.handleChange("lastname")} 
              onBlur={formik.handleBlur("lastname")} 
              disabled={edit}/>
            <div className="errors mt-2">{formik.touched.lastname && formik.errors.lastname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="text" 
              name="email"
              className="form-control" 
              id="example1" 
              value={formik.values.email} 
              onChange={formik.handleChange("email")} 
              onBlur={formik.handleBlur("email")} 
              disabled={edit}/>
            <div className="errors mt-2">{formik.touched.email && formik.errors.email}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              className="form-control" 
              id="example1" 
              value={formik.values.phone} 
              onChange={formik.handleChange("phone")} 
              onBlur={formik.handleBlur("phone")} 
              disabled={edit}/>
            <div className="errors mt-2">{formik.touched.phone && formik.errors.phone}</div>
          </div>
          {
            edit === false && 
            <button type="submit" className="btn btn-primary">Save</button>
          }
        </form>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Profile
