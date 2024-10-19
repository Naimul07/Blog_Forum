import { useState } from "react"
import { HiDotsVertical } from "react-icons/hi";

function PostDropdown({postId}) {
    const [open, setOpen] = useState(false);
    // console.log(open);
    function handleEdit() {
        alert(postId);
        // console.log(id);
    }
    function handleDelete() {
        alert(postId)
    }
    return (
        <>
            <div className="relative">
                <button onClick={() => setOpen(!open)} className="ml-24"> <HiDotsVertical /> </button>
                <ul className={`${open?'block':'hidden'} absolute bg-white z-10 shadow-md w-28 text-left rounded-lg text-sm`}>
                    <li onClick={handleEdit} className="cursor-pointer py-2 px-4 hover:bg-slate-200">Edit</li>
                    <li onClick={handleDelete} className="cursor-pointer py-2 px-4 hover:bg-slate-200">Delete</li>
                </ul>
            </div>
        </>
    )
}

export default PostDropdown