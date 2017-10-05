import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index";
import _ from 'lodash';

class PostsIndex extends Component{

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.values(this.props.posts).map(post => {
            return (
                <li key={post} className="list-group-item">
                    {post}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);