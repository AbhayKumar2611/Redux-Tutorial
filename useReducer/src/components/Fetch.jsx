import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };
  console.log("posts array :", posts);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          fontSize: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...........
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          fontSize: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Data Fetching using useReducer...</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>Post Number : {post.id}</h1>
            <h2>Post Title : {post.title}</h2>
            <h3>Post Content : {post.body}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
