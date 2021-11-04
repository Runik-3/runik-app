import React from 'react';
import LibraryIcon from '../Icons/LibraryIcon';
import AboutIcon from '../Icons/AboutIcon/Index';
// eslint-disable-next-line import/no-unresolved
// import SearchBar from '../SearchBar';

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between w-full px-5 pt-5">
            <AboutIcon />
            {/* <SearchBar /> */}
            <LibraryIcon />
        </div>
    );
};

export default NavBar;
