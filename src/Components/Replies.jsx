

function Replies({ replies, onReplyClick }) {

  return (
    <>
      <div className="flex items-start space-x-4 p-3">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <h3 className="font-semibold text-gray-900">Jane Smith</h3>
          <p className="text-gray-600">
            {replies?.reply}
          </p>
          <div className="flex space-x-4 text-sm text-gray-500 mt-2">
            <button className="hover:underline" onClick={onReplyClick}>Reply</button>
            <span>{new Date(replies.created_at).toLocaleDateString()}</span>

          </div>
        </div>
      </div>

    </>
  )
}

export default Replies