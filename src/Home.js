import BlogList from "./BlogList";
import useFetch from "./useFetch"; // import custom hook
import { API_URL } from "./config";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch(API_URL);

    return (
        <div className="name">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;