import React, { useState } from 'react';
import '../DeleteBlog/DeleteBlog.css';
import { useParams,useNavigate } from 'react-router';
import axios from 'axios';

export default function DeleteBlog(props){
    const params=useParams();
    const navigate=useNavigate();
    const [dstate,setDstate]=useState("deleted");
    const handleDelete=(e)=>{
        e.preventDefault();
        axios
        .delete('http://localhost:5000/api/blogs/'+params.id)
        .then(res => {
            console.log("Data Successfully deletd !!");
            setDstate("deleted");
        })
        .catch(err =>{
            console.log("Error in Deleting the blog !!");
            setDstate("notdeleted");
        })
        .finally(e =>{
            if(dstate==="deleted"){
                {props.setAlarm("Successfully deleted the blog!!","success")};
                navigate("/blogs");
            }
            else{
                {props.setAlarm("Error in Deleting the blog!!","error")};
            }
        })
    }
    return(
        <div className='form_cont'>
            <p className="form_cont1">
                Are You Sure You Want To Delete This blog?
            </p>
            <br />
            <button type="button" className="btn btn-primary btn-lg" onClick={handleDelete}>Delete</button>
        </div>    
    )
}