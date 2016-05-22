import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends Component {
    render() {
        return ( <form>
            <fieldset className="formGroup">
                <label>Email:</label>
                input className="form-control" />
            </fieldset>
            <fieldset className="formGroup">
                <label>Password:</label>
                input className="form-control" />
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