import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPost, setNewPost] = useState('')

  const addNewPost = async () => {
            const newPost = {
              title: newPostTitle,
              body: newPost,
              datetime: new Date().toISOString()
            };

             try {
              // json-server will automatically assign a new ID
              const res = await axios.post('http://localhost:3500/posts', newPost);
              window.alert("Post created successfully! Do you want to view it?") ;
              console.log("Saved to file:", res.data);
             } catch (err) {
              console.error("Failed to write to file", err);
             }

            
        };  

  return (
    <div>
        <article className="text-purple-50 bg-green-700 p-4 rounded-md shadow-md">
            <input type="text"
              value={newPostTitle}
              placeholder='Title'
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            
            <textarea value={newPost} placeholder='Your Post' onChange={(e) => setNewPost(e.target.value)}>
            </textarea>
           
        </article>


        <input type="submit" value="Submit Your Post"  onClick={()=>addNewPost()} className="bg-green-500 text-white p-2 rounded-md mt-4"/>
    
    </div>
  )
}

export default Create
