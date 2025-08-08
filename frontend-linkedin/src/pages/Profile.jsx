

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa';
import PostForm from '../components/PostForm';

const Profile = () => {
  const { user: loggedInUser, getUserProfile, updateUserProfile, deletePost, isLoading } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editBio, setEditBio] = useState('');
  const [editJobTitle, setEditJobTitle] = useState('');
  const [editSkills, setEditSkills] = useState('');
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(userId);
        setProfile(data);
        setEditBio(data.user.bio || '');
        setEditJobTitle(data.user.jobTitle || '');
        setEditSkills(data.user.skills?.join(', ') || '');
      } catch (err) {
        setError(err.msg || 'Failed to load profile');
      }
    };
    if (!isLoading) fetchProfile();
  }, [userId, getUserProfile, isLoading]);

  useEffect(() => {
    if (!isLoading && !loggedInUser && profile?.user._id === loggedInUser?._id) {
      navigate('/login', { replace: true });
    }
  }, [loggedInUser, profile, navigate, isLoading]);

  const handleSave = async () => {
    try {
      const skillsArray = editSkills.split(',').map(skill => skill.trim()).filter(Boolean);
      const updated = await updateUserProfile({ bio: editBio, jobTitle: editJobTitle, skills: skillsArray });

      setProfile(prev => ({
        ...prev,
        user: {
          ...prev.user,
          bio: updated.bio || prev.user.bio,
          jobTitle: updated.jobTitle || prev.user.jobTitle,
          skills: updated.skills || prev.user.skills || [],
        },
      }));
      setIsEditing(false);
    } catch (err) {
      setError(err.msg || 'Failed to update profile');
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setProfile(prev => ({
        ...prev,
        posts: prev.posts.filter(p => p._id !== postId),
      }));
    } catch (err) {
      setError(err.msg || 'Failed to delete post');
    }
  };

  if (isLoading || !profile) return <div className="text-center text-gray-600 py-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  const user = profile.user;
  const isOwnProfile = loggedInUser?._id === userId;

  return (
    <div className="max-w-4xl mx-auto  px-4 sm:px-6 py-8">
      <div className="relative bg-white rounded-lg shadow-md mb-8 overflow-hidden">
        <div className="h-28 sm:h-32 bg-gradient-to-r from-sky-500 to-indigo-600"></div>
        <div className="absolute top-16 left-4 sm:left-6">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
            alt="avatar"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>
        <div className="pt-20 pb-6 px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500 break-all">{user.email}</p>

          {isEditing ? (
            <>
              <textarea
                value={editBio}
                onChange={(e) => setEditBio(e.target.value)}
                className="w-full mt-3 p-2 border rounded-md text-sm"
                rows="3"
                placeholder="Your bio..."
              />
              <input
                type="text"
                value={editJobTitle}
                onChange={(e) => setEditJobTitle(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md text-sm"
                placeholder="Job Title"
              />
              <input
                type="text"
                value={editSkills}
                onChange={(e) => setEditSkills(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md text-sm"
                placeholder="Skills (comma-separated)"
              />
              <div className="mt-3 flex gap-3 flex-wrap">
                <button
                  onClick={handleSave}
                  className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-1 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 text-sm"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm text-gray-700">{user.bio || 'No bio yet.'}</p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Job Title:</span> {user.jobTitle || 'Not added'}
              </p>

              {user.skills?.length > 0 && (
                <div className="mt-3">
                  <span className="font-semibold text-sm text-gray-700">Skills:</span>
                  <div className="flex flex-wrap font-serif gap-2 mt-2">
                    {user.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {isOwnProfile && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-3 text-sm text-blue-600 hover:underline"
                >
                  Edit Profile
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Posts</h3>
      <div className='py-5'>
         <PostForm />
      </div>

      <div className="space-y-4">
        {profile.posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts yet.</p>
        ) : (
          profile.posts.map((post) => (
            <div key={post._id} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm sm:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <span className="text-blue-600 font-semibold text-sm sm:text-base">
                  {post.user.name}
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">
                  {new Date(post.date).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-800 text-sm sm:text-base mb-3 break-words">{post.text}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <FaRegThumbsUp /> Like
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <FaRegCommentDots /> Comment
                </button>
                {isOwnProfile && post.user._id === loggedInUser?._id && (
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 rounded-lg text-xs font-semibold hover:from-red-600 hover:to-red-700 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
