import React from "react";
import "../App.css"

const Feed = ({ feeds }) => {
  return (
    <div className="post-card">
      {feeds.type === "text" && <p>{feeds.content}</p>}
      {feeds.type === "image" && <img src={feeds.content} alt="Post" />}
      {feeds.type === "video" && (
        <video controls>
          <source src={feeds.content}  />
        </video>
      )}
    </div>
  );
};

export default Feed;
