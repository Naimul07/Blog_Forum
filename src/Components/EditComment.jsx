/* import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import useAuthStore from "../Store/AuthStore"
import toast from "react-hot-toast";
import CircleLoader  from "react-spinners/CircleLoader";



function CreateComment({ postId,onNewComment }) {
  const { handleSubmit,reset, register, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = useAuthStore((state) => state.token);

  async function onSubmit(data) {
    setLoading(true);
    try {
      const response = await axios.post('/Api/post/comments', {
        'comment': data.message,
        'post_id': postId,
      },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        toast.success(response.data.message);
        onNewComment(response.data.comment);
        reset();
    }
    catch (err) {
      setError(err);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your message
          </label>
          <textarea
            {...register('message', {
              required: "Message is required"
            })}
            
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your Comment here..."
          ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1 input-error">{errors.message.message}</span>}

          <button type='submit' className='mt-2 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'>{loading?(<CircleLoader/>):('Submit')}</button>
        </div>
      </form>
    </>
  )
}

export default CreateComment */