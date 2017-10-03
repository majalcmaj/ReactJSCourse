import React, {Component} from 'react';
import {connect} from "react-redux";
import GoogleMap from "../components/google_map";

class IpGeolocationList extends Component {

    showLastGeolocations() {
        const errorElement = this.props.ipGeolocations.error ? <div className="alert alert-danger" role="alert">
                Could not fetch location of provided host!
            </div>
            : "";
        if (this.props.ipGeolocations.values.length === 0) {
            return (
                <div>
                    {errorElement}
                    <div className="alert alert-info">Input IP address / host name and submit to see host's
                        geolocation!
                    </div>
                </div>);
        } else {
            const valuesList = this.props.ipGeolocations.values.map(value => {
                return (
                    <tr key={value.ip}>
                        <td><GoogleMap lat={value.latitude} lon={value.longitude}/></td>
                        <td>{value.ip}</td>
                        <td>{value.city}</td>
                        <td>{value.country}</td>
                    </tr>
                )
            });
            return (
                <div>
                    {errorElement}
                    <table className="table table-hover">
                        <tbody>
                        {valuesList}
                        </tbody>
                    </table>
                </div>
            );

        }
    }

    render() {
        return (
            <div>
                {this.showLastGeolocations()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ipGeolocations: state.ipGeolocations
    }
}

export default connect(mapStateToProps)(IpGeolocationList);