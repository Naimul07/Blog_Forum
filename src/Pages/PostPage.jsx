
import SideBar from "../Components/SideBar"
import { useParams } from "react-router-dom"
import Comment from "../Components/Comment";
import CreateComment from "../Components/CreateComment";
import Post from "../Components/Post";

function PostPage() {
  const { id } = useParams();
  
  return (
    <>
      <div className="pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
          <div className=" hidden sm:block border-r h-screen overflow-y-auto">
            <SideBar />
          </div>
          <div className="sm:col-span-2 md:col-span-3 border-r h-screen overflow-y-auto">
            <div>
              <Post id={id}/>
            </div>
            <div className="px-4 mt-4 mb-14">
              <CreateComment />
            </div>
            <div className="px-4 mt-6">
              <Comment />
            </div>

          </div>
          <div className="hidden sm:block border-r">col3</div>
        </div>
      </div>
    </>
  )
}

export default PostPage