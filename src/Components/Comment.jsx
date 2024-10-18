import { useEffect, useState } from "react"
import useAuthStore from "../Store/AuthStore";


function Comment() {
  const [comment,setComment] = useState([]);
  const [loading,setLoading]= useState(false);
  const token = useAuthStore((state)=>state.token);
  useEffect(()=>{
    const fetchComment = async () => {
      setLoading(true);
      try {
          const response = await axios.get(`/Api/post/${id}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          setComment(response.data);

      } catch (error) {
          console.log(error)
      }
      finally {
          setLoading(false);
      }
  }
  fetchComment();
  },[])

  return (
    <>
    <div>
      <div>
        <h1>Comments</h1>
      </div>

    </div>
    </>
  )
}

export default Comment