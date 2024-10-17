import SideBar from "../Components/SideBar"


function HomePage() {
  return (
    <>
      <div className="pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-4">
          <div className="sm:block border">
            <SideBar/>
          </div>
          <div className="col-span-2 px-10 border">col2</div>
          <div className="hidden sm:block border">col3</div>
        </div>
        </div>
    </>
  )
}

export default HomePage