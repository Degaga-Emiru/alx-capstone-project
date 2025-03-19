import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === values.email || user.username === values.username);
      if (userExists) {
        alert('User already exists. Please login.');
      } else {
        users.push(values);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! Please login.');
      }
    }
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label>Username</label>
          <input
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="w-full p-2 mt-2 border rounded"
          />
          {formik.touched.username && formik.errors.username && <div className="text-red-500 text-sm">{formik.errors.username}</div>}
        </div>

        <div className="mb-4">
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 mt-2 border rounded"
          />
          {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full p-2 mt-2 border rounded"
          />
          {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm">{formik.errors.password}</div>}
        </div>
        <div className="mb-4">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="w-full p-2 mt-2 border rounded"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
        <div className="mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
