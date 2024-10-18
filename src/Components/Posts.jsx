import { useEffect, useState } from "react";
import useAuthStore from "../Store/AuthStore"
import axios from "axios";
import PostItem from "./PostItem";

function Posts() {
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = useAuthStore((state) => state.token);

    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/Api/post', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log(response);
                setPosts(response.data);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }

        }
        fetchPosts()
    }, []);

    return (
        <>
            <div>
                <div>
                    <div>
                        {loading ? (
                            <h1>loading</h1>
                        ) : (
                            <div>
                            {
                                posts.map((post) => (
                                    <PostItem key={post.id} postdetails={post} />
                                ))
                            }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts