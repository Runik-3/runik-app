/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import AboutIcon from '../Icons/AboutIcon/Index';
import HeadlessSlideOver from '../HeadlessSlideOver';
import LibraryButton from '../LibraryButton';
import SearchBar from '../SearchBar';
// eslint-disable-next-line import/no-unresolved

export default function NavBar({ visibility }) {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false);

    usePreventScroll({ isDisabled: !isOpen });

    return (
        <OverlayProvider>
            <div className="flex flex-row justify-between w-full px-5 pt-5">
                <AboutIcon />
                <SearchBar visibility={visibility} />
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
