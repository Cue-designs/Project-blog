import { Link } from "react-router-dom";
const BlogPage = ({post}) => {

  return (
    <section className="text-lime-50"> 
        <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
        </Link>
         {
            (post.body).length <= 25 ? (
                <p>{post.body}</p>
            ) : (
                <p>{`${(post.body).slice(0, 25)}.....`}</p>
            )
        } 

     </section>
  );

};

export default BlogPage;