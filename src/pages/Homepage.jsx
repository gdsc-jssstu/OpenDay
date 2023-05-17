import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'


const Homepage = ({token}) => {
  let navigate = useNavigate();
  const [deps, setDeps] = useState([]);
  const [depid, setDepId] = useState([]);
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  useEffect(()=>{
    const fetchDeps = async () => {
      try {
        // Replace 'your_table' with the name of your table and 'id_column' with the actual column name for the ID
        const { data, error } = await supabase
          .from('Departments')
          .select('*')    
        if (error) {
          throw error;
        }
        console.log(data)
        setDeps(data);
        setDepId(data[0].id)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchDeps()
  })

  return (
    <div>
      <h3>Welcome back, {token.user.user_metadata.full_name}</h3>
      <p>Mobile :- {token.user.user_metadata.mobile}</p>
      {
        deps?.map((dep,i)=>
          <Link to = '/feedback' state={{depid:dep.id, token:token}} style={{color:'black'}}key={i}>{dep.id+" "+dep.Department}</Link>
        )
      }

      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Homepage