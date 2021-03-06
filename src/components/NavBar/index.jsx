/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import AboutIcon from '../Icons/AboutIcon/Index';
import HeadlessSlideOver from '../HeadlessSlideOver';
import LibraryButton from '../LibraryButton';
import SearchBar from '../SearchBar';
import RunikIcon from '../Icons/RunikIcon';
// eslint-disable-next-line import/no-unresolved

export default function NavBar({
    visibility,
    aDisplay,
    rDisplay,
    SearchHeight,
    resultsSearch,
    filterSearch,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false);

    usePreventScroll({ isDisabled: !isOpen });

    return (
        <nav className="w-full flex items-end top-0 z-50 bg-runik-neutral-light">
            <div className="flex flex-row items-center w-full shadow-md pb-0.5">
                <AboutIcon aDisplay={aDisplay} />
                {/* Having this icon in the NavBar comp makes the MainLogo comp disapear from the Search page, needs to be adjusted so that doesnt happen */}
                <RunikIcon rDisplay={rDisplay} />

                <SearchBar
                    visibility={visibility}
                    SearchHeight={SearchHeight}
                    resultsSearch={resultsSearch}
                    filterSearch={filterSearch}
                />
                <LibraryButton onClick={() => setOpen(true)} />
                <HeadlessSlideOver open={open} setOpen={setOpen}>
                    {/* <div className="flex flex-col">
                            <LibraryButton className="mt-4" onClick={handleOnClose}>
                                OK
                            </LibraryButton>
                        </div> */}
                </HeadlessSlideOver>
            </div>
        </nav>
    );
}
