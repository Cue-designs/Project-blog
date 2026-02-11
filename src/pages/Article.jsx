import React from 'react'

const Article = (post) => {
  return (
     <section>
        <Link to={`/post${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
        </Link>

        <p>
          {(post.body).legth <= 25
          ? post.body
          : `${(post.body).slice(0, 25)}.....`
          }

        </p>
     </section>
  )
}

export default Article