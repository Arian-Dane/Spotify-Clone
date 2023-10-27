import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

function App() {

  //usestate is how variables are handled in react
  const [token,setToken] = useState(null)

  //use effect runs code based on a given condition
  useEffect(()=>{
    const hash = getTokenFromUrl()
    //removes the access token from url for security 
    window.location.hash = ""
    //at the moment we get returned an object if we console.log(hash)
    //we want the token now
    const _token = hash.access_token
    
    //if we have a token we set the Token state as _token
    if(_token){
      setToken(_token)
    //you can add things to the [] so the code will rerun if the variable in it changes
    
    }
  },[])

  return (
    <div className='app'>
      
      {
        token? (
          <h1>i am logged in</h1>
        ):(
          <Login />
        )
      }

        
      
      
     
      
    </div>
  );
}

export default App;
