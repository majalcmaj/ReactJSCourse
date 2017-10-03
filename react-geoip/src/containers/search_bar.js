import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchIpGeolocation} from "../actions/index";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ""};

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchIpGeolocation(this.state.term);
        this.setState({term: ""});
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }


    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Input hostname or IP to get its geolocation info."
                    type="text"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                        <button type="submit" className="btn btn-btn-secondary">Submit</button>
                    </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchIpGeolocation}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);