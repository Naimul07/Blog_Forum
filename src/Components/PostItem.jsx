import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PostDropdown from "./PostDropdown";
function PostItem({ postdetails }) {

  const date = new Date(postdetails.created_at);
  const createdAgo = Math.floor((new Date() - date) / 60000);
  const day = Math.floor(createdAgo / (24 * 60));
  const month = Math.floor(day / 30);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let postDescription = postdetails.description;
  postDescription = postDescription.length > 300 ? postDescription.slice(0, 300) : postDescription;

  function handleClick(id) {
    // alert(id);
    navigate(`/post/${id}`);

  }

  return (
    <>
      <div className="py-4 px-8 border-b rounded-sm">

        <div className="mb-4">

          <div className="flex flex-col justify-between">

            <h1>{postdetails.user.firstName} {postdetails.user.lastName}</h1>
            {/*  <PostDropdown postId={postdetails.id} /> */}
            <span className="text-xs text-slate-500">{month ? `${month} ${month > 1 ? 'months' : 'month'} ago` : (day ? `${day} ${day > 1 ? 'days' : 'day'} ago` : `${createdAgo} ${createdAgo > 1 ? 'minutes' : 'minute'} ago`)} </span>

          </div>
        </div>
        <div className="flex justify-center">
          {postdetails.image && <img title={postdetails.title} src={`/Image/${postdetails.image}`} className="w-full h-auto object-cover lg:object-contain sm:w-24 md:w-40 lg:w-44 my-4" />}
        </div>

        <div className="text-justify cursor-pointer" onClick={() => handleClick(postdetails.id)}>
          {postDescription} <span className="text-blue-800 text-sm">Read more...........</span>
        </div>


        <div className="flex space-x-14 mt-4">
          <div className="flex items-center"><span><LuArrowBigUp size={22} /></span> <span className="bg-red-500 text-white text-xs rounded-full px-1">{postdetails.reactions_count}</span> <span><LuArrowBigDown size={22} /></span></div>
          <div className="relative flex items-center">
            <FaRegComment size={20} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {postdetails.comments_count + postdetails.replies_count}
            </span>
          </div>
          <div><FaRegShareSquare size={20} /></div>
        </div>
      </div>
    </>
  )
}

export default PostItem