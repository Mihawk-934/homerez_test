import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

    const history = useHistory();

    const likedPage = () => {
        history.push('/Liked');
    }

    const backPage = () => {
        window.history.back();
    }
    
    return (
        <div className="header">
            <h1 className="header__title">Wiki search</h1>
            <p 
                className={props.value ==='LIKED' ? "header__liked" : "header__back"}
                onClick={props.value ==='LIKED' ? likedPage : backPage}>
                {props.value}
            </p>
        </div>
    )
}
    
export default Header;