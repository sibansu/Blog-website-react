import React, { Component } from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footcontainer">
                    <div className="ftr">
                        <h3>Contents</h3>
                        <ul className="footcontent">
                            <li><a href="#" className='footlink'>Blog</a></li>
                            <li><a href="#" className='footlink'>Home</a></li>
                            <li><a href="#" className='footlink'>About</a></li>
                        </ul>
                    </div>
                    <div className="ftr">
                        <h3>Social Media</h3>
                        <ul className="footcontent">
                            <li><a href="#" className='footlink'>FaceBook</a></li>
                            <li><a href="#" className='footlink'>Instagram</a></li>
                            <li><a href="#" className='footlink'>Twitter</a></li>
                        </ul>
                    </div>
                    <div className="ftr">
                        <h3>Subscribe via Email</h3>
                        <form action="#">
                            <input className='footip' type="email" placeholder="Enter your Email here* " required/>
                                <div className="fbtn">
                                    <input type="submit" value="Subscribe Now"/>
                                </div>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}