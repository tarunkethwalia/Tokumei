import React from 'react';
import Light from '../Images/light.png';
import Lawliet from '../Images/lawliet.png';
import './Home.css';

function Home({history}) {
    const handleLogin = (text) => {
        history.push('/login', text);
    };
    return (
        <div className='homeContainer'>
            <div className="demonContainer" onClick={() => handleLogin('DemonTheme')}>
                <h1>Demon</h1>
                <img src={Light} alt="Light"/>
            </div>
            <div className="angelContainer" onClick={() => handleLogin('AngelTheme')}>
                <h1>Angel</h1>
                <img src={Lawliet} alt="Lawliet"/>
            </div>
        </div>
    )
}

export default Home;