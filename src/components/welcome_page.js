import React, { Component } from 'react'
import SlideShow from './slide_show'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
    render() {
        return(
            <div className='welcome-page'>
                <SlideShow />
                <Link className="welcome-btn btn" to="/main"></Link>
            </div>
        )
    }
}