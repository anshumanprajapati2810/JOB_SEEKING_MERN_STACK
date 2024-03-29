import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { FaPencilAlt, FaRegUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';
import { RiLock2Fill } from 'react-icons/ri';


const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const {isAuthorized, setIsAuthorized, user, setUser} = useContext(Context);

  const handleRegister = async (e) =>{
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    toast.success(data.message);
    setEmail("");
    setName("");
    setPassword("");
    setPhone("");
    setRole("");
    setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message); 
    }
    
  };
  if(isAuthorized){
    return <Navigate to={"/"}/>
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Create New Account</h3>
          </div>
          <form action="">
            <div className="inputTag">
              <label> Register As</label>
              <div>
                <select value={role} onChange={(e)=> setRole(e.target.value)}>
                <option value="">Select Option</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser/>
              </div>
            </div>
            <div className="inputTag">
              <label> Name </label>
              <div>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
                <FaPencilAlt/>
              </div>
            </div>
            <div className="inputTag">
              <label> Email </label>
              <div>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <MdOutlineMailOutline/>
              </div>
            </div>
            <div className="inputTag">
              <label> Phone Number </label>
              <div>
                <input type='number' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <FaPhoneFlip/>
              </div>
            </div>
            <div className="inputTag">
              <label> Password </label>
              <div>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <RiLock2Fill/>
              </div>
            </div>
            <button onClick={handleRegister} type='submit'>Register</button>
            <Link to={'/login'}>Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/register.png" alt="register" />
        </div>
      </section>
    </>
  )
}

export default Register