import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const history = useHistory();
    const [term, setTerm]= useState('');

    const search = (e) => {
        e.preventDefault();
        console.log('search');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });

        history.push(`/search`);
    }
    
    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            </div>

            { !hideButtons ? (
                <div className='search_buttons'>
                    <Button variant='outlined' type='submit'>Search</Button>
                    <Button variant='outlined' type='submit'>Filter</Button>
                </div>
            ) : (
                <div className='search_button'>
                    <Button
                        className='search_buttonsHidden'
                        onClick={search}
                        type='submit'
                        variant='outlined'
                        >
                            Search<Link to='/search'></Link>
                        </Button>
                    
                    <Button className='search_buttonsHidden' variant='outlined'>
                        Filter<Link to='/filter'></Link>
                    </Button>
                </div>
            )}
        </form>
    );
}

export default Search;
