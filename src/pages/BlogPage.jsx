import api from "../api/blog-api.js";
import {  useState,useEffect } from "react";
const BlogPage = () => {
 
   const [post, setPost] = useState([]);

useEffect(()=>{
  const fetchData = async ()=> {
    try{
      const response = await api.get('/post/:id');
      setPost(response.data);
    }
    catch (err){
      if (err.response) {
     // when it is not  not in 200 response range
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
      }
      else{
      console.error(`Error: ${err.message}`);
      }
    }
  }
  fetchData();

}, [])

  
   

  

  return (
    <section>
      {post.map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </article>
      ))}
    </section>
  );

};

export default BlogPage;