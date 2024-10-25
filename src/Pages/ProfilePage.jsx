import { useEffect, useState } from "react";
import useAuthStore from "../Store/AuthStore"
import axios from "axios";
import PostDropdown from "../Components/PostDropdown";

const ProfilePage = () => {

  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user)
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/Api/profile/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setProfile(response.data);
        // console.log(profile);
      }
      catch (err) {
        setError(err.response.data.error);
      }
      finally {
        setLoading(false);
      }

    }
    fetchdata();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen pt-16">
      {/* Profile Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-gray-300"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{profile.firstName} {profile.lastName}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <div className="mt-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-4">
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros vel lacus.</p>
        </div> */}
      </div>

      {/* Posts Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Posts</h3>
        <div className="space-y-4">
          {/* Post 1 */}
          {profile.posts&&profile.posts.length < 1 ? 'No Posts' : ''}
          {profile.posts?.map((post) => (
            <div key={post.id}>
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <div className="flex justify-between pb-4">
                <h4 className="font-semibold text-lg text-gray-800">{post.title}</h4>
                 <PostDropdown postId={post.id}/> 
                </div>
                <p className="text-gray-700">{post.description}</p>
                <div className="mt-2 text-gray-500 text-sm">Posted on: {new Date(post.created_at).toLocaleDateString()}</div>
              </div>
            </div>
          ))}


        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Comments</h3>
        <div className="space-y-4">
          {/* Comment 1 */}
          {
            profile.comments < 1 ? (
              'No Comments'
            ) : (
              <div>
                {
                  profile.comments?.map((comment) => (
                    <div key={comment.id}>
                      <div className="p-4 bg-gray-50 rounded-lg shadow mb-4">
                        <p className="text-gray-700">
                          <span className="font-semibold"></span>
                          {comment.comment}
                        </p>
                        <div className="mt-2 text-gray-500 text-sm">Commented on: {new Date(comment.created_at).toLocaleDateString()}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
