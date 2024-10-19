import { useForm } from "react-hook-form"

function CreatePost() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  
  function onSubmit(data){
    console.log(data)
  }
  
  return (
    <>
      <div className='pt-16 px-3'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-8 mt-4'>
            <label htmlFor="post" className="block mb-2 text-sm font-semibold">
              Title
            </label>
            <input
              {...register('title')}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Title..."
            />
          </div>
          <div>
            <label htmlFor="post" className="block mb-2 text-sm font-semibold ">
              Write Post
            </label>
            <textarea
              {...register('post')}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your Post here..."
            ></textarea>
          </div>

          <button type='submit' className='mt-2 float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default CreatePost