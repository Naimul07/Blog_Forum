import axios from "axios";
import { useParams } from "react-router-dom"
import Comment from "../Components/Comment";
import CreateComment from "../Components/CreateComment";
import Post from "../Components/Post";
import useAuthStore from "../Store/AuthStore";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function PostPage() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const token = useAuthStore((state) => state.token);
  const { id } = useParams();
  const isVerified = useAuthStore.getState().getUserVerified();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/Api/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPost(response.data);

      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false);
      }
    }
    fetchPost();

  }, [id,comments]);

  const handleNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1 md:col-span-4">
          <div>
            <Post postItem={post} />
          </div>
          <div className="px-4 mt-4 mb-14">
            {
              isVerified ? (<CreateComment postId={id} onNewComment={handleNewComment}/>) : ('')
            }
          </div>
          <div className="px-4 mt-6">
            <Comment comment = {post.comments} />
          </div>
        </div>
        <div className="hidden md:col-span-1 h-screen">

        </div>
      </div>


    </>
  )
}

export default PostPage