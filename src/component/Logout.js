import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

export const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
    function logout(){
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
      })
    };

  return (
    <div>
        <p>ログアウト</p>
        <button onClick={logout}>logout</button>
        </div>
  )
}
