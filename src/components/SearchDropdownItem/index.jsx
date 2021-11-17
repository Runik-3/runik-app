/* eslint-disable react/prop-types */
import PlusCircle from '../Icons/PlusCircle';

export default function SearchDropdownItem({ title, url }) {
    // can run check to see if url is in library - isntead of +
    return (
        <li className="flex justify-between text-xl py-4 border-b-2 last:border-0 cursor-pointer">
            {title}
            <PlusCircle url={url} />
        </li>
    );
}
