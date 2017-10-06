import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {signIn} from '../actions/index';
import '../static/styles/SignIn.css';

class SignIn extends Component {

    onSubmit(values) {
        signIn(values.email, values.password,
            () => { this.props.history.push('/') },
            () => {}
        );
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}/>
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="card signInForm">
                <div className="card-block">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label="E-mail "
                            name="email"
                            type="text"
                            component={this.renderField}
                        />
                        <Field
                            label="Password"
                            name="password"
                            type="password"
                            component={this.renderField}
                        />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        );
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate(values) {
    const errors = {};

    if (!values.email || !validateEmail(values.email)) {
        errors.email = "Enter a valid email address.";
    }

    if (!values.password || values.password.length < 4) {
        errors.password = "Enter a password that is at least 4 characters long.";
    }

    return errors;
}

export default reduxForm({
        validate,
        form: 'SignInForm'
    }
)(SignIn);