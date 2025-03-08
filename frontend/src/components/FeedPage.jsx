import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const FeedPage = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate("/", { state: location.state });
    sessionStorage.setItem("isRefreshed", "false");
  };

  return (
    <>
    <div className="post-detail-container">
      <h2>Post ID: {id}</h2>
      <button onClick={goBack} className="back-button">
        Back to Feed
      </button>
    </div>
    </>
  )
}

export default FeedPage