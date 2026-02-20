import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const addNewPost = async () => {
    const postData = {
      title: newPostTitle,
      body: newPostBody,
      datetime: new Date().toISOString(),
    };

    try {
      const res = await axios.post('http://localhost:3500/posts', postData);
      window.alert("Post created successfully! Do you want to view it?");
      console.log("Saved to file:", res.data);
      // Clear form after success
      setNewPostTitle('');
      setNewPostBody('');
    } catch (err) {
      console.error("Failed to write to file", err);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <article className="bg-green-700 text-purple-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-purple-300 text-xl font-bold mb-4">Create a New Post</h2>
        
        <input
          type="text"
          value={newPostTitle}
          placeholder="Title"
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="w-full p-2 mb-3 border border-purple-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black text-green-200"
        />

        <textarea
          value={newPostBody}
          placeholder="Your Post"
          onChange={(e) => setNewPostBody(e.target.value)}
          className="w-full p-2 mb-3 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-black text-purple-200"
          rows="5"
        />

        <button
          onClick={addNewPost}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold p-2 rounded-md mt-2 shadow-md"
        >
          Submit Your Post
        </button>
      </article>
    </div>
  );
};

export default Create;
