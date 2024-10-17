

function Navbar() {
  return (
    <>
      <div className="py-3 fixed top-0 w-full border-b">
        <nav className="container mx-auto flex justify-between gap-4 ">
          <div>
            <h1>BlogForum</h1>
          </div>
          <ul className="flex gap-6">
            <li>
              <input type="text" className="border rounded-md border-black" />
            </li>
            <li>
              Notification
            </li>
            <li>
              create post
            </li>
            <li>
              user
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar