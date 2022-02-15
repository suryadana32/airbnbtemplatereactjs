import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';

function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search/>}
                <Button
                onClick={() => setShowSearch(!showSearch)} 
                className='banner_searchButton'
                variant="outlined"> Search Date</Button>
            </div>
            <div className='banner__info'>
                <h1>This my Portofolio App Air BnB using React JS</h1>
                <h5>Plan a different kind of gate to uncover the hidden gem near you</h5>
                <Button
                variant='outlined'>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner