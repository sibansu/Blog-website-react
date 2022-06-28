import React from 'react';
import {Link} from 'react-router-dom';

export default function BlogCard(props){
    const blog=props.blog;
    return(
        <div className="card" key={props.index}>
            <div className="cardim im1"></div>
            <h2>{blog.title}</h2>
            <p>{blog.blog_desc}</p>
            <Link to={`/show-blog/${blog._id}`}>Click me</Link>
        </div>
    )
}