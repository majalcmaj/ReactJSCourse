import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import * as actions from '../../actions';

const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

class SignIn extends Component {

    renderField(field) {
        const {meta: {touched, error}} = field;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <fieldset className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </fieldset>
        );
    }

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit({email, password}) {
        this.props.signInUser({email, password});
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Email"
                    type="text"
                    name="email"
                    component={this.renderField}
                />

                <Field
                    label="Password"
                    type="password"
                    name="password"
                    component={this.renderField}
                />

                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}


function validate({email, password}) {
    const errors = {};

    if(!email || !EMAIL_REGEX.test(email)) {
        errors.email = "You have to input a valid email.";
    }
    if(!password || password.length < 4) {
        errors.password = "You have to input password which is at last 4 letters long.";
    }

    return errors;
}

export default reduxForm({
    form: 'SignInForm',
    validate
})(connect(null, actions)(SignIn));
