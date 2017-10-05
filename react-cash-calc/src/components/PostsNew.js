import React, {Component} from 'react';
import {createPost} from "../actions/index";

class PostsNew extends Component {

    constructor(props) {
        super(props);

        this.state = {postText: ""};

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({postText: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        createPost(this.state.postText);
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <form className="input-group" onSubmit={this.onSubmit}>
                    <input
                        placeholder="Type in the post text."
                        type="text"
                        className="form-control"
                        value={this.state.postText}
                        onChange={this.onInputChange} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}
export default PostsNew;