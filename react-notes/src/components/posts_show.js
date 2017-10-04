import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from "../actions/index";
import {deletePost} from "../actions/index";

class PostsShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {this.props.history.push('/')});
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <div className="text-xs-right">
                        <Link to="/" className="btn btn-primary">Back to index</Link>
                        <button className="delPostButton btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}
                        >
                            Delete post
                        </button>
                    </div>
                    <h3>{post.title}</h3>
                    <h6>{post.categories}</h6>
                    <p>{post.content}</p>
                    Posts Show!
                </div>
            );
        }
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);