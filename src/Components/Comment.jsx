import Replies from "./Replies";
function Comment({ comment }) {
  
  return (
    <>
      <div>
        <div className="w-full mx-auto p-4 rounded-lg">
          <div className="bg-white p-4  w-full">
            {/* Main Comment */}

            {comment && comment.length > 0 ? (
              comment.map((item) => (
                <div className="mb-4 p-3" key={item.id}>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div >
                      <h3 className="font-semibold text-gray-900">John Doe</h3>
                      <p className="text-gray-600 pt-2 pl-1">
                        {item.comment}
                      </p>
                      <div className="flex space-x-4 text-sm text-gray-500 mt-2">
                        <button className="hover:underline">Reply</button>
                        <span>{new Date(item.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  {item.replies && item.replies.length > 0 ? (
                    item.replies.map((rply) => (
                      <div className="ml-10 space-y-4 my-3" key={rply.id}>
                        <Replies replies={rply} />

                      </div>
                    ))
                  ) : ''}
                </div>
              ))

            ) : (
              'No Comment yet'
            )}


            {/* Replies */}

          </div>
        </div>

      </div>
    </>
  )
}

export default Comment