'use client'

import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState("")

  const handleSubmit = async(e:React.SyntheticEvent) => {
    e.preventDefault();

    // Hard-coded Credentials
    const validUsername = "admin"
    const validPassword = "@1234"
   
    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }

    if (username === validUsername && password === validPassword) {
      // save login state
      localStorage.setItem("isLoggedIn","true")
      // Redirect to home
      router.push("/")
    }else {
      setError("Invalid username or password")
    }
  };

  return (
    
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Login</h3>

        {error && (
          <div className='alert alert-danger py-2'>
            {error}
            </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
