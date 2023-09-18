import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-300 text-center pt-10 mt-10 rounded-xl ">
          <h1>Reading Time : {readingTime}</h1>


            <h2 className="text-3xl">Bookmarks Blog : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
