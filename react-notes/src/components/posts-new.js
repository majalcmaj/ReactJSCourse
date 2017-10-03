import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}/>
                {field.meta.touched ? field.meta.error : ""}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-prmiary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters long!";
    }


    if(!values.tags) {
        errors.tags = "Enter a tag!";
    }


    if(!values.content) {
        errors.content = "Enter a content!";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);