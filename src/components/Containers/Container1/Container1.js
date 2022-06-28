import React from 'react';
import { Link } from 'react-router-dom';
import '../Container1/Container1.css';

export default function Container1() {
    return (
        <>
        <div className='textarea1'>
            Creating Blogs lead to creating masterpiece
        </div>
        <div className='imgbgc1'></div>
        <Link to="/newblog">
        <button className="buttonarea">
            <div className="startbar">Start a new blog +</div>
        </button>
        </Link>
        </>
    )
}