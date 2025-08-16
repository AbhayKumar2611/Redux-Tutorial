import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  posts: [],
  loading: true,
  error: "",
};

const FetchReducer = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  const [newState, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: "FETCH_LOADING" });

      // setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      console.log(res.data);

      // setPosts(res.data);
      // setLoading(false);
      // setError("");

      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error.message);

      // setLoading(false);
      // setError(error.message);

      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  };

  // console.log("posts array :", posts);

  useEffect(() => {
    fetchData();
  }, []);

  if (newState.loading) {
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

  if (newState.error) {
    return (
      <div
        style={{
          fontSize: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {newState.error}
      </div>
    );
  }

  return (
    <div>
      <h1>Data Fetching using useReducer...</h1>
      {newState.posts.map((post) => {
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

export default FetchReducer;
