import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.array.isRequired
}
export default Blog;