/*global google*/
import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        const latLon = {
            lat: this.props.lat,
            lng: this.props.lon
        };

        const map = new google.maps.Map(this.refs.map, {
            zoom: 8,
            center: latLon
        });

        new google.maps.Marker({
            position: latLon,
            map: map,
        });
    }

    render() {
        return <div className="google-map" ref="map" />
    }
}

export default GoogleMap;