import { useState } from "react";
import Replies from "./Replies";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuthStore from "../Store/AuthStore";

function Comment({ comment, postId,onNewComment }) {
  const [activeReplyId, setActiveReplyId] = useState(null);
  const { handleSubmit, reset, register, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = useAuthStore((state) => state.token);

  const handleClick = (id) => {
    setActiveReplyId((prevId) => (prevId === id ? null : id));
  };

  const onSubmit = async (id, data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        '/Api/post/comments/reply',
        {
          reply: data.message,
          post_id: postId,
          comment_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
      onNewComment(response.data.message);
      reset();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-4 rounded-lg">
      <div className=" p-4 rounded-md w-full">
        {comment && comment.length > 0 ? (
          comment.map((item) => (
            <div className="mb-4 p-3" key={item.id}>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-300"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">John Doe</h3>
                  <p className="text-gray-700 mt-1">{item.comment}</p>
                  <div className="flex space-x-4 text-sm text-gray-500 mt-2">
                    <button
                      className="hover:text-blue-600 text-blue-500 font-medium"
                      onClick={() => handleClick(item.id)}
                    >
                      Reply
                    </button>
                    <span>{new Date(item.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Replies List */}
              {item.replies && item.replies.length > 0 && (
                <div className="ml-10 mt-4">
                  {item.replies.map((rply) => (
                    <Replies key={rply.id} replies={rply} onReplyClick={() => handleClick(rply.comment_id)} />
                  ))}
                </div>
              )}

              {/* Conditional Reply Form */}

              {activeReplyId === item.id && (
                <form onSubmit={handleSubmit((data) => onSubmit(item.id, data))} className="ml-10 mt-3 w-3/4">
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-800">
                    Your reply
                  </label>
                  <textarea
                    {...register('message', {
                      required: "Message is required",
                    })}
                    rows="2"
                    className="block p-2 w-full text-sm text-gray-800 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your reply here..."
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
                  )}
                  <button
                    type="submit"
                    className="mt-2 px-4 py-1.5 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md"
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default Comment;
