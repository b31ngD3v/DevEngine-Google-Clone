import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function SearchBar({ hideButtons=false, termm }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        history.push('/search');
        dispatch ({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }
    return (
        <div className="searchBar">
            <form>
                <div className="bar">
                    <SearchIcon id="searchIcon"/>
                        {!hideButtons ? (
                            <input className="search" value={input} onChange={e => setInput(e.target.value)}></input>
                        ): (
                            <input className="search" value={input} placeholder={termm} onChange={e => setInput(e.target.value)}></input>
                        )}
                    <svg className="micIcon" focusable="false" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path>
                            <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
                            <path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path>
                            <path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path>
                    </svg>
                </div>
            {!hideButtons ? (
                <div className="searchButton">
                    <input id="subBut" type="submit" onClick={search} value="DevEngine Search"></input>
                    <input id="subBut" type="button" value="I'm Felling Lucky"></input>
                </div>
            ): (
                <div className="searchButton">
                    <input className="searchButton__hidden" type="submit" onClick={search} value="DevEngine Search"></input>
                    <input className="searchButton__hidden" type="button" value="I'm Felling Lucky"></input>
                </div>
            )}
            </form>
        </div>
    );
}

export default SearchBar;