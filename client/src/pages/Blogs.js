import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const [blogs ,setBlogs] = useState([]);
    //get all blogs 
  const getAllBlogs = async ()=>{
    try{
    const {data} =  await axios.get('/api/v1/blog/all-blog')
   
    if(data?.success){ 
     setBlogs(data?.blogs)
      //console.log(data?.blogs)
    }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllBlogs();
  },[])

  return (<div> <h1>Blog List</h1>
  
  {blogs && blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            // <li key={blog.id}>{blog.title}</li>
            <BlogCard
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}/>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
 
  </div>
    
  )
}

export default Blogs;