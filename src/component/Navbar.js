import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'


export const Navbar = ({isAuth}) => {
  return (
    <nav>
        <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
            ホーム</Link>
            {isAuth ? 
                    <Link to="/createpost">
                    <FontAwesomeIcon icon={faFilePen} />
                        記事投稿</Link>
            :""}
            {!isAuth ? 
        <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン</Link>
            :
            <Link to="/logut">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
                ログアウト</Link>
}
    </nav>
  )
}
