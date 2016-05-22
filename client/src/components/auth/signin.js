import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends Component {
    
    handleFormSubmit({email, password}) {
        console.log(email, password);
    }
    
    render() {        
        const {handleSubmit, fields : { email, password }} = this.props;
        
        return ( 
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="formGroup">
                <label>Email:</label>
                <input {...email} className="form-control" />
            </fieldset>
            <fieldset className="formGroup">
                <label>Password:</label>
                <input {...password} className="form-control" />
            </fieldset>
            <button action="submit" className="btn btn-primary" >
                Sign in
            </button>
        </form>
      );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn);