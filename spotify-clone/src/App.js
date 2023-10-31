import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

//creating a new instance of the spotifywebapi
const spotify = new SpotifyWebApi()

function App() {

  
//any data we need to grab from the datalayer we can parse into the object
//dispatch is used to update the value of the datalayer
  const [{user,token},dispatch]=useDataLayerValue()

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
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      //allowing the spotifywebapi to safely communicate with the react app
      spotify.setAccessToken(_token)

      //dispatch shoots data we add to it into the datalayer
      spotify.getMe().then((user) =>{
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })
    //you can add things to the [] so the code will rerun if the variable in it changes
    
    }
  },[])

  return (
    <div className='app'>
      
      {
        token? (<Player spotify = {spotify}/>):(<Login />)
      }

      </div>
  );
}

export default App;
