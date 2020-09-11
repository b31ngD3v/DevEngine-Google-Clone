import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Logo from '../logo.png';
import './Home.css';
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'


function Home() {
    return (
        <div className="home">
                <div className="topBar">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon id='appIcon' />
                    <Avatar id='avatar' />
                </div>
                <div className="logo">  
                    <img src={Logo} alt="" />
                </div>
                <div className="searchElement">                  
                    <SearchBar />
                </div>
                <div className="Footer">
                    <Footer />
                </div>
        </div>
    );
}

export default Home;