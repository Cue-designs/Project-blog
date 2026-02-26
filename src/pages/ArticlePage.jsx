import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const ArticlePage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        if (id) {
            console.log(id);
            axios.get(`http://localhost:3500/posts/${id}`)
            .then((res) => {
                setPost(res.data); // Axios places data in res.data
                console.log(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
       
   }, []);
 
  
        const handleDeletePost = async() => {
            const confirmDelete = window.confirm("Are you sure you want to delete this post?");
            if(confirmDelete){
               await axios.delete(`http://localhost:3500/posts/${id}`)
               .then((res)=>{
                 setPost(res.data); 
                 console.log("Post deleted successfully");
               })
              .catch((error)=>{
                console.error("Error deleting post:", error);
              });
              
            }
        }

    return (
        <section className="text-lime-50 min-h-[70vh] p-4 lg:px-24"> 
            <h2 className="py-12 text-2xl font-bold text-center">{post?.title}</h2>
            <p className="px-4 ">{post?.body}</p>
            <p className="py-8 px-4">{post?.datetime}</p>
            <span className="flex justify-end"><FaTrash className="text-red-800 text-2xl cursor-pointer" onClick={()=>handleDeletePost()}/></span>
        </section>
    );

};

export default ArticlePage;