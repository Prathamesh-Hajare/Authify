import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      toast.error("Enter all fields", { position: "top-center" });
      return;
    }

    try {
      const url = "http://localhost:8080/auth/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await res.json();
      const { success, message,error } = result;
      
      if (success) {
        toast.success("Signup Successfully");
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if(error){
        toast.error(error?.details[0].message || "Signup Failed", { position: "top-center" });
      } else if(!success){
        toast.error( "Signup Failed", { position: "top-center" });
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later.", { position: "top-center" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='Container'>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            placeholder='Enter your name'
            autoFocus
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <button type='submit'>Submit</button>
        <span>Already Registered? <Link to="/login">Login</Link></span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
