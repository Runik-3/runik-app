import React from 'react';
import LibraryIcon from '../Icons/LibraryIcon';
import AboutIcon from '../Icons/AboutIcon/Index';
import SearchBar from '../SearchBar';
// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line react/prop-types
const NavBar = ({ visibility }) => {
    return (
        <div className="flex flex-row justify-between w-full px-5 pt-5">
            <AboutIcon />
            <SearchBar visibility={visibility} />
            <LibraryIcon />
        </div>
    );
};

export default NavBar;
