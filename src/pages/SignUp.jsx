import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

import AuthIcon from "../assets/AuthIcon/authIcon.svg";
import "../assets/css/auth.css";

const SignUp = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            mobile: formData.mobile,
          },
        },
      });
      if (error) throw error;
      else {
        setToken(data);
        navigate("/routemap");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="login-main">
      <img src={AuthIcon} alt="authIcon" className="authIcon" />
      <div className="info">
        <h3>OPEN DAY'23</h3>
        <p>Lorem ipsum dolor sit amet consectetur adispicing elit</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Fullname" name="fullName" onChange={handleChange} />

        <input placeholder="Email" name="email" onChange={handleChange} />

        <input placeholder="Mobile" name="mobile" onChange={handleChange} />

        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
      <p className="sign-up-link">
        Already have an account!<Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {

//   const [formData,setFormData] = useState({
//     fullName:'',email:'',password:''
//   })

//   console.log(formData)

//   function handleChange(event){
//     setFormData((prevFormData)=>{
//       return{
//         ...prevFormData,
//         [event.target.name]:event.target.value
//       }

//     })

//   }

//   async function handleSubmit(e){
//     e.preventDefault()

//     try {
//       const { data, error } = await supabase.auth.signUp(
//         {
//           email: formData.email,
//           password: formData.password,
//           options: {
//             data: {
//               full_name: formData.fullName,
//             }
//           }
//         }
//       )
//       if (error) throw error
//       alert('Check your email for verification link')

//     } catch (error) {
//       alert(error)
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder='Fullname'
//           name='fullName'
//           onChange={handleChange}
//         />

//         <input
//           placeholder='Email'
//           name='email'
//           onChange={handleChange}
//         />

//         <input
//           placeholder='Password'
//           name='password'
//           type="password"
//           onChange={handleChange}
//         />

//         <button type='submit'>
//           Submit
//         </button>

//       </form>
//       Already have an account?<Link to='/'>Login</Link>
//     </div>
//   )
// }

// export default SignUp