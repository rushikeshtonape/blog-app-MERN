import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { Box } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //get all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");

      if (data?.success) {
        setBlogs(data?.blogs);
        //console.log(data?.blogs)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {" "}
      <Box sx={{ width: "20%", margin: "auto", mt: 2, padding: 3 }}>
        <h1>BLOG LIST</h1>
      </Box>
      {blogs && blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <BlogCard
              id={blog?._id}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              title={blog?.title}
              description={blog?.description}
              image={blog?.image}
              username={blog?.user?.username}
              time={blog.createdAt}
            />
          ))}
        </ul>
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: "43%",
            top: "50%",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          No blogs found.
        </p>
      )}
    </div>
  );
};

export default Blogs;
