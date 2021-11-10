/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LibraryOpenIcon from '../components/Icons/LibraryOpenIcon';
import Divider from '../components/Icons/Divider';

const products = [
    {
        id: 1,
        name: 'Harry Potter',
        href: '#',
        imageSrc:
            'http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg',
        imageAlt: 'Dictionary Image.',
    },
    // More products...
];

// eslint-disable-next-line react/prefer-stateless-function
// class Library extends Component {
//     state = {
//             open: false,
//     };

//     isOpen = () => {
//         if (this.state.open === true) {
//             this.setClose();
//         } else {
//             this.setOpen();
//         }
//     }

//     setOpen = () => {
//         this.state = {
//             open: true,
//         }
//     }

//     setClose = () => {
//         this.state = {
//             open: false,
//         }
//     };

export default function Library() {
    // render() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 overflow-hidden"
                    onClose={setOpen}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacisty-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                                <div className="w-screen max-w-md">
                                    <div className="h-full flex flex-col bg-runik-neutral-light flex-1 shadow-xl overflow-y-scroll">
                                        <div className=" py-6 overflow-y-auto px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Library
                                                </Dialog.Title>
                                                <div className="ml-3 h-7 flex items-center">
                                                    <button
                                                        type="button"
                                                        className="mt-12 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <LibraryOpenIcon />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul
                                                        role="list"
                                                        className="-my-6 divide-y divide-gray-200"
                                                    >
                                                        {products.map(
                                                            (product) => (
                                                                <li
                                                                    key={
                                                                        product.id
                                                                    }
                                                                    className="py-6 flex"
                                                                >
                                                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                        <img
                                                                            src={
                                                                                product.imageSrc
                                                                            }
                                                                            alt={
                                                                                product.imageAlt
                                                                            }
                                                                            className="w-full h-full object-center object-cover"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex-1 flex flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a
                                                                                        href={
                                                                                            product.href
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            product.name
                                                                                        }
                                                                                    </a>
                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-runik-neutral-light border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                                <p>
                                                    or{' '}
                                                    <button
                                                        type="button"
                                                        className="text-indigo-600 font-medium hover:text-indigo-500"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        Continue Browsing
                                                        <span aria-hidden="true">
                                                            {' '}
                                                            &rarr;
                                                        </span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}
// }

// export default Library;
