import React, { Component } from 'react'
import "./Container3.css"
export default function Container3() {
    return (
        <>
            <div className="flexbox-cont3">
                <div className="flexbox-c3item flexbox-c3i-1">
                    <div className="grid-c4item grid-c3ia-1" />
                    <div className="grid-c4item grid-c3i-2">
                        <h1>My Story</h1><br />
                        <span className='c3line'>______</span><br /><br />
                        <a href="#" className="c3link">About Me</a>
                    </div>
                </div>
                <div className="flexbox-c3item flexbox-c3i-2">
                    <div className="grid-c4item grid-c3ib-1" />
                    <div className="grid-c4item grid-c3i-2" id="favwork">
                        <h1>My Favourite Work</h1><br />
                        <span className='c3line'>______</span><br /><br />
                        <a href="#" className="c3link">Available Here</a>
                    </div>
                </div>
            </div>
        </>
    )
}