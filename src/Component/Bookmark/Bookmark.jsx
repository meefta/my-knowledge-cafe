

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-slate-200 m-4 p-4 rounded-xl">
            <h1>{title}</h1>
        </div>
    );
};

export default Bookmark;