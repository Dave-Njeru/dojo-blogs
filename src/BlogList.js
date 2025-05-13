import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({ blogs, title }) => { // directly destruct the props property 

    return (
        <div className="blog-lists">
            <h1>{title}</h1>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;