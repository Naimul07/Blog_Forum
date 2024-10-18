import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar"
import { useParams } from "react-router-dom"
import useAuthStore from "../Store/AuthStore";
import axios from "axios";
import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

function PostPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const token = useAuthStore((state) => state.token);
  // console.log(id);
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

  }, [id]);
  console.log(post);

  const date = new Date(post.created_at);
  const createdAgo = Math.floor((new Date() - date) / 60000);
  const day = Math.floor(createdAgo / (24 * 60));
  const month = Math.floor(day / 30);

  return (
    <>
      <div className="pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
          <div className=" hidden sm:block border h-screen overflow-y-auto">
            <SideBar />
          </div>
          <div className="sm:col-span-2 md:col-span-3 border h-screen overflow-y-auto">
            <div className="px-4">
              {/* here the post */}
              <div className="my-2">
                <h1>{post.user?.firstName} {post.user?.lastName}</h1>
                <span className="text-xs text-slate-600">{month ? `${month} ${month > 1 ? 'months' : 'month'} ago` : (day ? `${day} ${day > 1 ? 'days' : 'day'} ago` : `${createdAgo} ${createdAgo > 1 ? 'minutes' : 'minute'} ago`)} </span>
              </div>
              <div className="text-justify r">
                {post.description}
              </div>
              <div className="flex space-x-8 mt-4">
                <div className="flex items-center"><span><LuArrowBigUp size={22} /></span> <span className="bg-red-500 text-white text-xs rounded-full px-1">2</span> <span><LuArrowBigDown size={22} /></span></div>
                <div className="relative flex items-center">
                  <FaRegComment size={20} />
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {/* {postdetails.comments_count} */}
                  </span>
                </div>
                <div><FaRegShareSquare size={20} /></div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block border">col3</div>
        </div>
      </div>
    </>
  )
}

export default PostPage