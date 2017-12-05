import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../images/level.jpg'
import image2 from '../images/bopen.jpg'
import image3 from '../images/mh2.jpg'

export default class SlideShow extends Component {
    


    render(){
        return(
            <div>
                <BackgroundSlideshow images={[image1, image2, image3]}/>
            </div>
        )
    }
}