import React from 'react';
import useGoogleSearch from '../useGoogleSearch'
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import './SearchScreen.css';
import { useStateValue } from '../StateProvider';

function SearchScreen(){
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className='searchScreen'>
            <div className='searchScreen_header'>
                <Link to='/'>
                    <img className="searchPage__logo"
                        src="https://i.ibb.co/z7PcVs3/F-und-Ball.png"
                        alt=""/>
                </Link>
            </div>

            <div className='searchPage_headerBody'>
                <Search hideButtons />
                <div className='searchPage_options'>
                    <div className='searchPage_optionsLeft'>

                        
                    </div>

                </div>
            </div>

            {term && (
                <div className='searchScreen_results'>
                    <p className='searchPage_resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for{" "} <strong>{term}</strong>
                    </p>

                    {data?.items.map((item) =>(
                        <div className='searchPage_result'>
                            <a className='searchPage_resultLink' href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage_resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt =""/>
                                )}
                                {item.displayLink}
                            </a>

                            <a className='searchPage_resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>

                            <p className='searchPage_ResultSnippet'>{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchScreen;