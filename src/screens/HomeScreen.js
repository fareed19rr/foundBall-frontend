import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import './HomeScreen.css';


function HomeScreen() {
    return (
        <div className='home'>
            <div className='home_header'>

            </div>

            <div className = 'home_body'>
                <img src="https://i.ibb.co/z7PcVs3/F-und-Ball.png" alt="Found-Ball" border="0"></img>
                <div className='home_inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;
