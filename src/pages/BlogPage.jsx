import { Link } from "react-router-dom";
import Article from "./Article";
const BlogPage = (post) => {

  return (
    <section>
      {post.map((article) => (
        <Article key={article.id} post={post} />
      ))}
    </section>
  );

};

export default BlogPage;