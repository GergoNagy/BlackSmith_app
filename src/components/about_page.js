import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import NavBar from './nav_bar'

class AboutPage extends Component{
    renderField(field){
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
    }

    render(){
        const { handleSubmit } = this.props
        
        return(
            <div>
                <NavBar />
                About Page(this will be the place to talk about the company)

                <h3>Send me a message:</h3>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                        name='phoneNumber'
                        label='Phone Number'
                        component={this.renderField}
                    />
                    <Field 
                        name='message'
                        label='Message'
                        component={this.renderField}
                    />
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        )
    } 
}

function validate(values) {
    const errors = {}
    if (!values.name) {
        errors.name = 'Enter a title!'
    }

    if(!values.email) {
        errors.email = 'Enter your email adress!'
    }


    return errors;
}

export default reduxForm({
    validate,
    form: 'Messages'
})(AboutPage)