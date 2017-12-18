import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component{

    myFunction() {
        var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
    }

    render(){
        return(
            <div className="topnav" id="myTopnav">
                <Link to='/'>Welcome</Link>
                <Link to='/main'>Home</Link>
                <Link to='/about'>About</Link>
                <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>&#9776;</a>
            </div>
        )
    }
}