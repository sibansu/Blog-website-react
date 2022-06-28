import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../EditBlog/EditBlog.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from 'axios';


export default function EditBlog(props) {
  const params = useParams();

  const [state, setState] = useState({ title: '', blog_desc: '', blog_text: '' });

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    async function fetchData() {
      const _id = params.id.toString();
      const response = await fetch(`http://localhost:5000/api/blogs/${_id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.log(`Record with id ${_id} not found`);
        return;
      }
      setState(record);
      console.log(state.blog_text);
      return;
    }
    
    fetchData();
    return;
  }, [params.id]);
  
  if (quill) {
    quill.clipboard.dangerouslyPasteHTML(state.blog_text);
  }
  const handleEdit=()=>{
    console.log("The changed state is - " + state.blog_text);
    setState({...state,blog_text:quillRef.current.firstChild.innerHTML});

    const data = {
      title:state.title,
      blog_desc:state.blog_desc,
      blog_text:state.blog_text
    };

    axios
      .put('http://localhost:5000/api/blogs/'+params.id, data)
      .then(res => {
        console.log(data.blog_text);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })

  };

  return (
    <>
      <div className="edit_cont">
        {/* <button type="button" className="edit_btn">Load to edit</button>
        <br /> */}
        <textarea className="title_edit" id="title_edit" value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })}></textarea>
        <br />
        <textarea className="desc_edit" id="desc_edit" value={state.blog_desc} onChange={(e) => setState({ ...state, blog_desc: e.target.value })}></textarea>
        <br />
        <div className="quillbox">
          <div ref={quillRef} className="text_edit" id="text_edit"/>
        </div>
        {/* dangerouslySetInnerHTML={{__html:state.blog_text}} onChange={(e) => setState({ ...state, blog_text: e.target.value })} */}
        <br />
        <div className="edit_btn_area">
          <button type="button" className="edit_btn" onClick={handleEdit}>Double Click to Save Edit</button>
          {/* onClick={handleEdit} */}
        </div>
      </div>
    </>
  )
}
