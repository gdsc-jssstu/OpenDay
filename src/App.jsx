import { useState, useEffect } from 'react';
import { SignUp, Login, Homepage } from './pages';
import {Routes, Route} from 'react-router-dom';
import "./App.css"
import Feedback from './pages/Feedback';

const App = () => {

 const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  

 
  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={ <SignUp />} />
        <Route path={'/'} element={ <Login setToken={setToken}/>} />
        {token?<Route path={'/homepage'} element={ <Homepage token={token} />} />:""}
        {token?<Route path={'/feedback'} element={<Feedback token={token} />} /> : ""}
      </Routes>
     
      
    </div>
  )
}

export default App