import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '../client';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import AuthIcon from "../assets/AuthIcon.svg"

import "../assets/css/auth.css"

const Login = ({setToken}) => {
  let navigate = useNavigate()
  const alertDiv = document.getElementById('invalid')
  const [formData,setFormData] = useState({
        email:'',password:''
  })


  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      setToken(data)
      navigate('/homepage')


    //   alert('Check your email for verification link')

      
    } catch (error) {

      alert(error);
    }
  }




  return (
    <div className='login-main' >
        <img src={AuthIcon} alt="authIcon" className='authIcon' />
        <div className="info">
          <h3>OPEN DAY'23</h3>
          <p>Lorem ipsum dolor sit amet consectetur adispicing elit</p>
        </div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <br />
        <input 
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />
        <br />
        <button type='submit'>
          Sign In
        </button>
        <br />

      </form>
      <p className='sign-up-link'>
      Dont have an account? <Link to='/signup'>Sign Up</Link> 
      </p>
      
    </div>
  )
}

export default Login