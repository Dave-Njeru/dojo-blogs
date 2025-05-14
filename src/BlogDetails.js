import { useParams, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { API_URL } from "./config";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(API_URL + '/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch(API_URL + '/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            alert('Blog deleted successfully');
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;