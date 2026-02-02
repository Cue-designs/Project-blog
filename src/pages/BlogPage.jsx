import { useParams } from "react-router-dom";

const BlogPage = ({ isClicked = false } = {}) => {
  // Simple sample articles

  const articles = [
    { id: 1, title: 'Blog Article', content: 'This is the first blog article content.' },
    { id: 2, title: 'Blog Article 2', content: 'This is the second blog article content.' },
    { id: 3, title: 'Blog Article 3', content: 'This is the third blog article content.' },
  ];   
   
const { id } = useParams();

  if (isClicked) {
  

  return (
    <main>
      {articles.map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </article>
      ))}
    </main>
  );
}
};

export default BlogPage;