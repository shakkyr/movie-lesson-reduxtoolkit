import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png'
import './Header.scss'

const Header = () => {
    return (
        <div className="movie__header">
            <Link to="/">
            <div className="movie__logo">
                Movie App
            </div>
            </Link>
            <div className="movie__user__image">
                <img src={user} alt="user" />
            </div>
            
        </div>
    );
};

export default Header;