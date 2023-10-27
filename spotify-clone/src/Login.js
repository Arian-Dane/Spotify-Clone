import React from 'react'
import './Login.css'
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        <img src={process.env.PUBLIC_URL + '/images/spotify-logo.jpg'} alt="Spotify Logo" />

        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;