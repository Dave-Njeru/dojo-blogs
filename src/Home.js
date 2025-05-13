import BlogList from "./BlogList";
import useFetch from "./useFetch"; // import custom hook

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="name">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;