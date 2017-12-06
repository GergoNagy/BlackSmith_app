import React, { Component } from 'react'

export default class SlideShow extends Component {
    render(){
        return(
            <ul className="cb-slideshow">
                <li>
                    <span>Image 01</span>
                    <div>
                        <h3>Welcome</h3>
                    </div>
                </li>
                <li><span>Image 02</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 02</span></li>
            </ul>
            )
        }
    }