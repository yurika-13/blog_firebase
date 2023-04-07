import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

export const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    function LoginWithGoogle(){
        signInWithPopup(auth, provider).then((result) => {
            // ローカルストレージに保存する
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
       });
    };

  return (
    <div>
        <p>ログインして始める</p>
        <button onClick={LoginWithGoogle}>go!</button>
        </div>
  )
}
