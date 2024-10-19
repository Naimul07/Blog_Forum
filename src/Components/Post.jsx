import { useEffect, useState } from "react";
import useAuthStore from "../Store/AuthStore";
import axios from "axios";
import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import PostDropdown from "./PostDropdown";

function Post({ id }) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const token = useAuthStore((state) => state.token);
    const userv = useAuthStore((state) => state.user);
    // console.log(userv)
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
            <div className="px-4 pb-2 mt-6">
                {/* here the post */}
                <div className="my-2">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-lg from-neutral-800">{post.title}</h1>
                        {post.user?.id === userv.id && <PostDropdown postId={post.id} />}
                    </div>
                </div>
                <div className="mb-2">
                    <h1 className="mb-0 text-sm">{post.user?.firstName} {post.user?.lastName}</h1>
                    <span className="text-xs text-slate-600">{month ? `${month} ${month > 1 ? 'months' : 'month'} ago` : (day ? `${day} ${day > 1 ? 'days' : 'day'} ago` : `${createdAgo} ${createdAgo > 1 ? 'minutes' : 'minute'} ago`)} </span>
                </div>
                <div className="flex justify-center">
                  {post.image&&<img title={post.title} src={`http://localhost:8000/storage/${post.image}`} className="w-full h-auto object-cover sm:w-3/4 md:w-1/2 lg:w-1/3" />}
                </div>
                <div className="text-justify mt-4">
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
        </>
    )
}

export default Post