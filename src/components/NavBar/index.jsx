/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import AboutIcon from '../Icons/AboutIcon/Index';
import HeadlessSlideOver from '../HeadlessSlideOver';
import LibraryButton from '../LibraryButton';

// eslint-disable-next-line import/no-unresolved
// import SearchBar from '../SearchBar';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false);

    usePreventScroll({ isDisabled: !isOpen });

    return (
        <OverlayProvider>
            <div className="flex flex-row justify-between w-full px-5 pt-5">
                <AboutIcon />
                {/* <SearchBar /> */}{' '}
                <LibraryButton onClick={() => setOpen(true)} />
                <HeadlessSlideOver open={open} setOpen={setOpen}>
                    {/* <div className="flex flex-col">
                        <LibraryButton className="mt-4" onClick={handleOnClose}>
                            OK
                        </LibraryButton>
                    </div> */}
                </HeadlessSlideOver>
            </div>
        </OverlayProvider>
    );
}
