import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const BlogPage = ({post}) => {
   // Function to add a new post with empty title and body
   

  return (
    <div className=" ">
        <section className="text-purple-50 bg-green-700 p-4 rounded-md shadow-md">
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
            
            <div className="flex justify-end rounded-2xl bg-green-500 p-2 mt-4">
                <Link to={`/create`}>
                    <FaPlus className="text-white text-2xl cursor-pointer" />
                </Link>
            </div>
        </section>
    </div>
  );

};

export default BlogPage;