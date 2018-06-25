import React from 'react';
import { Link } from 'react-router-dom';
import './NotLogged.css';

function NotLogged (){
    return(
        <div className="notlogged">
            <img src="https://wbo2hhkgdnexdedu-zippykid.netdna-ssl.com/wp-content/uploads/2012/07/jackie-chan-meme.jpg" alt="JackieChanMeme"/>
            <div className="notloggedBox">
                <p className="notloggedtext">YOU ARE NOT LOGGED IN!</p>
                <p className="notloggedtext">PLEASE CLICK THE BUTTON TO RETURN TO THE HOME SCREEN.</p>
            </div>
            <Link to='/'>
                <button className="return">Return Home</button>
            </Link>
        </div>
    )
}
export default NotLogged;