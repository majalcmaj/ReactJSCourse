import React, {Component} from 'react';
import '../static/styles/App.css';
import SearchBar from "../containers/search_bar";
import IpGeolocationList from "../containers/ip_geolocation_list";

class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar/>
                <IpGeolocationList/>
            </div>
        );
    }
}

export default App;
