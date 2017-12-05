import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'

export default class SlideShow extends Component {
    render(){
        return(
            <div>
                Pic
                <img className='img' alt='loading' src={require("./pic/level.jpg")}/>
            </div>
        )
    }
}