import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from './pic/level.jpg'
import image2 from './pic/bopen.jpg'
import image3 from './pic/mh2.jpg'

export default class SlideShow extends Component {
    


    render(){
        return(
            <div>
                <BackgroundSlideshow images={[image1, image2, image3]}/>
            </div>
        )
    }
}