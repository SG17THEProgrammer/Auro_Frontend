<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const FeedPage = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< HEAD
=======
=======
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const FeedPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const post = location.state?.feeds.find((feed) => feed.id === id);

  if (!post) {
    return <h2>Post not found!</h2>;
  }

>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  const goBack = () => {
    navigate("/", { state: location.state });
    sessionStorage.setItem("isRefreshed", "false");
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
  return (
    <>
    <div className="post-detail-container">
      <h2>Post ID: {id}</h2>
<<<<<<< HEAD
=======
=======
// console.log(location)    

  return (
    <>
    <Navbar></Navbar>
    <div className='upperPostDetDiv'>
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p>{post.description}</p>

      {post.type === "image" && <img src={post.content} alt={post.title} className="post-image" />}
      {post.type === "video" && (
        <video controls className="post-video">
          <source src={post.content} type="video/mp4" />
        </video>
      )}
      {post.type === "text" && <p>{post.content}</p>}
<br /><br />
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
      <button onClick={goBack} className="back-button">
        Back to Feed
      </button>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
    </>
  )
}

<<<<<<< HEAD
export default FeedPage
=======
export default FeedPage
=======
    </div>
    </>
  );
};

export default FeedPage;
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
