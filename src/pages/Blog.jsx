import BlogPage from "./BlogPage"
import { FaTimes } from "react-icons/fa"
const Blog = (search, setsearch, post) => {

  
  return (
    <>
       <section>
        <nav><input type="search" 
        name="" 
        className="bg-amber-100"
        id="search" 
        onSubmit={(e)=> e.preventDefault()}
        value={search}
        placeholder="Search post"
        onChange={(e)=>setsearch(e.target.value)}
        
        />
        
        </nav>

        <section className="bg-amber-50">
          {
            post.lenght ?(
              <BlogPage post={post} />
            ) :(
              <p className="text-2xl text-center font-bold">Sorry There is no blog Post available yet Login to create one <FaTimes className="text-red-800 bg-red-800"/></p>
            )
          }

        </section>

       </section>
    </>
  )
}

export default Blog
