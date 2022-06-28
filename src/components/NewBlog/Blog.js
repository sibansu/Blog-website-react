import React, { useState } from 'react'
import "./Blog.css"
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
// import { useNavigate } from "react-router";

export default function Blog() {
  // const modules = {
  //     toolbar: [
  //       ['bold', 'italic', 'underline', 'strike'],
  //     ],
  //   };

  const [blogData, setBlogData] = useState({ title: '', blog_desc:'',blog: ''});
  const { quill, quillRef } = useQuill(); //if we want we can use custome modules as above by inserting {modules} in the bracket
  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quillRef.current.firstChild.innerHTML);
        setBlogData({ ...blogData, blog: quillRef.current.innerHTML });
      });
    }
  }, [quill, quillRef]);

  // console.log(blogData.blog, "This is quill editor");

  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      title: blogData.title,
      blog_desc: blogData.blog_desc,
      blog_text: blogData.blog
    };
    console.log("before sending data: " + blogData.blog);
    axios
      .post('http://localhost:5000/api/blogs', data)
      .then(res => {
        setBlogData({ ...blogData, title: '' })
        setBlogData({ ...blogData, blog_desc: '' })
        setBlogData({ ...blogData, blog: '' })
      })
      .catch(err => {
        console.log("Error in Creating Blog!");
      })
    console.log("after sending data: " + blogData.blog);
  }

  return (
    <>
      <form className='titleForm'>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleInputTitle" value={blogData.title} onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={blogData.blog_desc} onChange={(e) => setBlogData({ ...blogData, blog_desc: e.target.value })}></textarea>
        </div>
      </form>
      <div className="quillbox" id="quillarea" >
        <div ref={quillRef} className="blogbox" id="blogarea" />
      </div>
      <div className="savearea">
        <button type="button" onClick={handleSave} className="savebtn">Save Draft</button>
      </div>
    </>
  )
}