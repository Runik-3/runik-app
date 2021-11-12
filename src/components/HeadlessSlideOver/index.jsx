/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LibraryOpenIcon from '../Icons/LibraryOpenIcon';
import Divider from '../Icons/Divider';

export default function HeadlessSlideOver({ open, setOpen, children }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed inset-0 overflow-hidden"
                open={open}
                onClose={setOpen}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen max-w-sm">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-library-icon-top left-library-icon-right">
                                        <button onClick={() => setOpen(false)}>
                                            <span className="sr-only">
                                                Close panel
                                            </span>
                                            <LibraryOpenIcon />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full flex flex-col justify-center items-center bg-runik-neutral-light pt-library-children overflow-y-scroll">
                                    <Divider />
                                    <div className="w-library-children-width mt-4 text-3xl text-runik-neutral-med">
                                        <h1>Library</h1>
                                    </div>
                                    <div className="mt-6 relative flex-1">
                                        {/* Replace with your content */}
                                        {children}
                                        {/* /End replace */}
                                    </div>
                                    <Divider />
                                    <div className="flex flex-col w-library-children-width mt-4 text-3xl text-runik-neutral-med">
                                        <h2>
                                            Select Your <br /> Device
                                        </h2>
                                        <form className="mt-6 font-spartan font-semibold text-lg text-runik-neutral-dark mb-10">
                                            <input
                                                type="radio"
                                                value="Kobo"
                                                name="device"
                                                className="mr-2"
                                            />
                                            Kobo <br />
                                            <input
                                                type="radio"
                                                value="Kindle"
                                                name="device"
                                                className="mr-2"
                                            />
                                            Kindle <br />
                                            <div className="w-4/5 mt-6 text-xl text-center m-auto p-auto outline-dark py-2 rounded">
                                                <input
                                                    type="submit"
                                                    value="Download"
                                                    className="font-semibold"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
