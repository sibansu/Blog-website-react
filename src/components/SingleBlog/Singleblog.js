import React, { useState,useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import "./Singleblog.css";
// import axios from 'axios';

export default function Singleblog(){
  const [bstate,setBstate]=useState({title:"",blog_desc:"",blog_text:""});

  const params = useParams();
  const _id = params.id.toString();

  const navigate=useNavigate();
  
  useEffect(() => {
    async function fetchData() {
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
      setBstate(record);
    }
    fetchData();
    return;
},[params.id]);

const [btnState,setBtnState]=useState("Show details");

const handleClick=()=>{
  const doc=document.getElementById("text_blog");

  if(doc.childElementCount===0){
    doc.innerHTML=bstate.blog_text;
    setBtnState("Show less");
  }
  else{
    doc.innerHTML=bstate.blog_desc;
    setBtnState("Show details");
  }
}

const handleEdit=()=>{
    navigate(`/show-blog/${_id}/edit_blog`);
}

const handleDelete=()=>{
    navigate(`/show-blog/${_id}/delete_blog`);
}

return( 
    <div className="data_blog" id="parent_cont">
        <div className='header_blog'>
        <h1 className="title_blog">{bstate.title}</h1>
        <div className="btn_cont">
        <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Edit</button>
        <button type="button" className="btn btn-outline-primary" onClick={handleDelete}>Delete</button>
        </div>
        </div>
        <p className="text_blog" id="text_blog" >
          {bstate.blog_desc}
        </p>
        <button type="button" className="btn btn-outline-primary" onClick={handleClick}>{btnState}</button>
    </div>
)
}