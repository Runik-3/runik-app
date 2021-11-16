export default function SearchBarDropdown({ barVisibility }) {
    return (
        <div
            className={`relative top-0 w-2/3 mx-auto bg-white rounded-b-2xl p-8 ${
                barVisibility === 'invisible' ? 'hidden' : 'block'
            }`}
        >
            test alsfjkdalskfjsdlkfjsdlfkjsd
        </div>
    );
}
