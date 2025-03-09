import React, { useRef, useState, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useInView } from "react-intersection-observer";
import { useNavigate, useLocation } from "react-router-dom";
import Feed from "./Feed";
import { fetchData } from "../utils/fetchData";
<<<<<<< HEAD
import Search from "./Search";  
import "../App.css";
=======
<<<<<<< HEAD
import Search from "./Search";  
import "../App.css";
=======
import "../App.css";
import Navbar from "./Navbar";
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)

const VirtualizedFeed = () => {
  const parentRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const [feeds, setFeeds] = useState(() => location.state?.feeds || []);
  const [loading, setLoading] = useState(false);
  const [filteredFeeds, setFilteredFeeds] = useState([]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)

  const isRefreshed = useRef(sessionStorage.getItem("isRefreshed") === "true");

//   console.log(isRefreshed)

<<<<<<< HEAD
=======
=======
  const isRefreshed = useRef(sessionStorage.getItem("isRefreshed") === "true");

>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  useEffect(() => {
    const loadInitialPosts = async () => {
      if (feeds.length === 0) {
        setLoading(true);
        const newFeeds = await fetchData(0, 20);
        setFeeds(newFeeds);
        setLoading(false);
      }
    };
    loadInitialPosts();
  }, []);

<<<<<<< HEAD

  // Infinite scrolling
=======
<<<<<<< HEAD

  // Infinite scrolling
=======
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      setTimeout(async () => {
        const newFeeds = await fetchData(feeds.length, 20);
        if (newFeeds.length > 0) {
          setFeeds((prev) => [...prev, ...newFeeds]);
        }
        setLoading(false);
      }, 1000);
    }
  }, [inView]);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)

  useEffect(() => {
    if (!parentRef.current) return;

    const savedScrollPosition = sessionStorage.getItem("scrollPosition");

<<<<<<< HEAD
=======
=======
  useEffect(() => {
    if (!parentRef.current) return;
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
    if (isRefreshed.current) {
      parentRef.current.scrollTo(0, 0);
      sessionStorage.removeItem("scrollPosition");
    } else if (savedScrollPosition) {
      parentRef.current.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, [location]);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)

  const handlePostClick = (id) => {
    sessionStorage.setItem("scrollPosition", parentRef.current?.scrollTop || 0);
    navigate(`/post/${id}`, { state: { feeds } });
<<<<<<< HEAD
=======
=======
  const handlePostClick = (id) => {
    sessionStorage.setItem("scrollPosition", parentRef.current?.scrollTop || 0);
    navigate(`/post/${id}`, { state: { feeds } });
    window.scrollTo({ top: "0", behavior: "smooth"})
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  };

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("isRefreshed", "true");
    });
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
    return () => {
      window.removeEventListener("beforeunload", () => {
        sessionStorage.setItem("isRefreshed", "true");
      });
    };
  }, []);


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setFilteredFeeds([]);
      return;
    }
    setLoading(true);
    const results = await fetchData(0, 100); 
    const filtered = results.filter((post) =>
      post.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFeeds(filtered);
    setLoading(false);
  };


<<<<<<< HEAD
=======
=======
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  const rowVirtualizer = useVirtualizer({
    count: (filteredFeeds.length > 0 ? filteredFeeds.length : feeds.length) || 1_000_000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 180,
  });

  return (
    <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)
      <Search onSearch={handleSearch} />

      {/* Feed Container */}
      <div className="feed-container" ref={parentRef} style={{ overflowY: "auto", height: "80vh" }}>
<<<<<<< HEAD
=======
=======
    <Navbar setFilteredFeeds={setFilteredFeeds} setLoading={setLoading} feeds={feeds}></Navbar>
      <div className="feed-container" ref={parentRef} style={{ overflowY: "auto", height: "75vh" , marginTop:"90px" }}>
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
        <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: "relative" }}>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const feed =
              filteredFeeds.length > 0
                ? filteredFeeds[virtualRow.index]
                : feeds[virtualRow.index];

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
                  cursor: "pointer",
                }}
                onClick={() => handlePostClick(feed.id)}
              >
                <Feed feeds={feed} />
              </div>
            ) : null;
          })}
        </div>
        {loading && <p className="loading-text">Loading more posts...</p>}
      </div>
    </div>
  );
};

export default VirtualizedFeed;
