import { useParams } from "react-router-dom"
import Comment from "../Components/Comment";
import CreateComment from "../Components/CreateComment";
import Post from "../Components/Post";
import useAuthStore from "../Store/AuthStore";
function PostPage() {
  const { id } = useParams();
  const isVerified = useAuthStore.getState().getUserVerified();
  return (
    <>
      <div className="">

        <div>
          <Post id={id} />
        </div>

        <div className="px-4 mt-4 mb-14">
          {
            isVerified ? (<CreateComment />) : ('')
          }

        </div>
        <div className="px-4 mt-6">
          <Comment />
        </div>



      </div>

    </>
  )
}

export default PostPage