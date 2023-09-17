import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const{title , cover , author , author_img , posted_date , reading_time , hashtags} = blog
    return (
        <div>
            <img className='w-1/2 h-1/2' src={cover} alt="" />

            <div className='flex justify-between'>

                <div className='flex'>
              <img className='w-12' src={author_img} alt="" />
              <div className='ml-2'>
             <h1 className="text-xl font-normal">{author}</h1>
             <p>{posted_date}</p>
              </div>
                </div>


                <div>
              <span>{reading_time} min read</span>
                </div>


            </div>



            <h2 className='text-4xl'>{title}</h2>
            <p>{
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }</p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.array.isRequired
}
export default Blog;