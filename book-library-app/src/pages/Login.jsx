import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required('Username or Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => (user.email === values.identifier || user.username === values.identifier) && user.password === values.password);

      if (user) {
        alert('Login successful!');
      } else {
        alert('Invalid username/email or password.');
      }
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label>Username or Email</label>
          <input
            name="identifier"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identifier}
            className="w-full p-2 mt-2 border rounded"
          />
          {formik.touched.identifier && formik.errors.identifier && <div className="text-red-500 text-sm">{formik.errors.identifier}</div>}
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

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        <div className="mt-4 text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
