import React, {useState,useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';

function UserBlogs() {
    const [blogs,setBlogs] = useState([]);

    const getUserBlogs = async ()=>{
        try{
            const id = localStorage.getItem("userId");
            const { data } = await axios.get(`/api/v1/blog/get-userblog/${id}`);
            
            if (data?.success) {
              setBlogs(data?.userBlog.blogs);
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getUserBlogs();
    },[])
  return (<>
    {blogs && blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            
            <BlogCard
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}/>
          ))}
        </ul>
      ) : (
        <p>You haven't created a blog.</p>
      )}
      </>
  )
}

export default UserBlogs