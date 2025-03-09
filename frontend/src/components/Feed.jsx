import React from "react";
import { useInView } from "react-intersection-observer";
import "../App.css";

const Feed = ({ feeds }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="post-card" ref={ref}>
      {feeds.type === "text" && <p>{feeds.content}</p>}

      {feeds.type === "image" && (
        <>
          <img
            src={feeds.content}
            alt="Post"
            loading="lazy"
            style={{ opacity: "0.6" }}
          />
          <div className="about">
            <p>{feeds.title}</p>
            <p>{feeds.description}</p>
          </div>
        </>
      )}

      {feeds.type === "video" && (
        <>
          <video controls poster="placeholder.jpg" width="100%">
            {inView && <source src={feeds.content} type="video/mp4" />}
          </video>
          <div className="about">
            <p>{feeds.title}</p>
            <p>{feeds.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
