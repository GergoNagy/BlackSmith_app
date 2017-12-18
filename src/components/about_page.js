import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import NavBar from './nav_bar'

class AboutPage extends Component{
    renderField(field){
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
            </div>
        )
    }

    render(){
        return(
            <div>
                <NavBar />
                About Page(this will be the place to talk about the company)

                <form>
                    <Field 
                        name='name'
                        label='Name'
                        component={this.renderField}
                    />
                    <Field 
                        name='email'
                        label='Email'
                        component={this.renderField}
                    />
                    <Field 
                        name='message'
                        label='Message'
                        component={this.renderField}
                    />
                </form>
            </div>
        )
    } 
}

export default reduxForm({
    form: 'Messages'
})(AboutPage)