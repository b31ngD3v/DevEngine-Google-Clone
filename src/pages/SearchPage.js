import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import SearchBar from '../components/SearchBar';
import useGoogleSerch from "../useGoogleSearch"
import Response from "../response";
import { Link } from "react-router-dom";
import Logo from '../logo.png';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Footer from "../components/Footer";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSerch(term);
    //const data = Response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className='header'>
                <Link to="/">
                    <img className="headerLogo" src={Logo} alt="" />
                </Link>
                <SearchBar hideButtons={true} termm={term} />
                <div className='topSec'>
                    <AppsIcon id='appIcon' />
                    <Avatar id='avatar' />
                </div> 
                <div className='options'>
                    <div className='optionsLeft'>
                        <div className="spOptions">
                            <SearchIcon id="lcn" />
                            <Link to='/all'>All</Link>
                        </div>
                        <div className="spOptions">
                            <DescriptionIcon id="lcn" />
                            <Link to='/news'>News</Link>
                        </div>
                        <div className="spOptions">
                            <ImageIcon id="lcn" />
                            <Link to='/images'>Images</Link>
                        </div>
                        <div className="spOptions">
                            <LocalOfferIcon id="lcn" />
                            <Link to='/shopping'>Shopping</Link>
                        </div>
                        <div className="spOptions">
                            <RoomIcon id="lcn" />
                            <Link to='/maps'>Maps</Link>
                        </div>
                        <div className="spOptions">
                            <MoreVertIcon id="lcn" />
                            <Link to='/more'>More</Link>
                        </div>
                    </div>
                </div>
                <div className='optionsRight'>
                    <div className='spOptions'>
                        <Link to="/settings">Settings</Link>
                        <Link to="/tools">Tools</Link>
                    </div>
                </div>
            </div>
            
            {term && (
            <div className='results'>
                <p className="searchPage_count">
                    About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} seconds for {term}
                </p>
                {data?.items.map(item => (
                    <div className="searchPage_result">
                        <a href={item.link} className='links'>
                            {item.displayLink}
                        </a>
                        <a className="searchPage_title" href={item.link}>
                            <h3>{item.title}</h3>
                        </a>
                        <p className="searchPage_snippet">
                            {item.snippet}
                        </p>
                    </div>
                )

                )}
            </div>
            )}
            <Footer />
        </div>
    );
}

export default SearchPage;
