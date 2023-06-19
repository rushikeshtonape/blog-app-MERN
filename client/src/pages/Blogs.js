import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Blogs = () => {
  const [blogs ,setBlogs] = useState([]);
  //get all blogs 
  const getAllBlogs = async ()=>{
    try{
    const {data} = await axios.get("/api/v1/blog/all-blog")
    if(data && data.success){
      setBlogs(data?.blogs)
      
    }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllBlogs();
  },[])

  return (
    <div>Blogs</div>
  )
}

export default Blogs;