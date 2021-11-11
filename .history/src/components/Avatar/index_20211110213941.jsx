const Avatar = ({ img }) => {
    return (
        // direction-row
        <div>
            <div className="flex rounded-xl mr-6 w-64">
                <img
                    src={img}
                    alt="Placeholder"
                    className="max-w-full rounded-xl"
                />
            </div>
        </div>
    );
};

export default DetailsCard;
