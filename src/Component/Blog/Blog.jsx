import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog , handleAddToBookmarks , handleReadingTime}) => {
    const{title , cover , author , author_img , posted_date , reading_time , hashtags} = blog
    return (
        <div className='mb-14 mr-24 space-y-3 '>
            <img className='w-1/2 h-1/2 mb-4 ' src={cover} alt="" />

            <div className='flex justify-between'>

                <div className='flex'>
              <img className='w-12 ' src={author_img} alt="" />
              <div className='ml-2'>
             <h1 className="text-xl font-normal">{author}</h1>
             <p>{posted_date}</p>
              </div>
                </div>


                <div>
              <span>{reading_time} min read</span>
              <button onClick={() => handleAddToBookmarks(blog)}  className="ml-3"> <FaBookmark></FaBookmark></button>
                </div>


            </div>



            <h2 className='text-4xl'>{title}</h2>
            <p>{
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }</p>
                <button onClick={() => handleReadingTime(reading_time)} className='text-purple-800 underline text-xl'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.array.isRequired
}
export default Blog;