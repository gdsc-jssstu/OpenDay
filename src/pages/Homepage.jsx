import { useNavigate } from 'react-router-dom'

const Homepage = ({token}) => {
  let navigate = useNavigate()
  
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <p>Mobile :- {token.user.user_metadata.mobile}</p>
      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Homepage