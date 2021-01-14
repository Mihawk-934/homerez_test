import React from 'react';
import Header from '../../components/Header/Header';
import { useSelector } from 'react-redux';

const Liked = () => {

    const liked = useSelector(state => state.wikiSearch.liked);

    return (
        <div className="App">
            <Header value="BACK" color="header__back"/>
            <p className="results">Liked</p>
            <hr/>
            {
                liked.length === 0 && <p style={{padding: '16px 24px 0px 0px'}}>Aucun result.</p>
            }
             <ul style={{padding: '16px 24px 0px 0px', listStyleType: "none"}}>
            {
                liked.map((liked) => (
                    <li key={liked}>- {liked}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Liked;