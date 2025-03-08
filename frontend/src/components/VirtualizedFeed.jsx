import React, { useRef, useState, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useInView } from "react-intersection-observer";
import Feed from "./Feed";
import { fetchData } from "../utils/fetchData";
import "../App.css";

const VirtualizedFeed = () => {
  const parentRef = useRef(null);
  const [feeds, setFeeds] = useState([]); 
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const loadInitialPosts = async () => {
      setLoading(true);
      const newFeeds = await fetchData(0, 8); 
      setFeeds(newFeeds);
      setLoading(false);
    };
    loadInitialPosts();
  }, []);

  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      setTimeout(async () => {
        const newFeeds = await fetchData(feeds.length, 8);
        if (newFeeds.length > 0) {
          setFeeds((prev) => [...prev, ...newFeeds]); 
        }
        setLoading(false);
      }, 1000);
    }
  }, [inView]);

  const rowVirtualizer = useVirtualizer({
    count: feeds.length || 1_000_000, 
    getScrollElement: () => parentRef.current,
    estimateSize: () => 180,
  });

  return (
    <div className="feed-container" ref={parentRef} style={{ overflowY: "auto", height: "80vh" }}>
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: "relative" }}>
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const feed = feeds[virtualRow.index];
          return feed ? (
            <div
              key={feed.id}
              ref={virtualRow.index === feeds.length - 1 ? ref : null}
              className="feed-item"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "97%",
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <Feed feeds={feed} />
            </div>
          ) : null;
        })}
      </div>
      {loading && <p className="loading-text">Loading more posts...</p>}
    </div>
  );
};

export default VirtualizedFeed;
