import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
    return (
        <section className="text-lime-50"> 
            <h2>{post?.title}</h2>
            <p>{post?.datetime}</p>
            <p>{post?.body}</p>

        </section>
    );



};

export default ArticlePage;