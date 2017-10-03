import {combineReducers} from "redux";
import IpGeolocationReducer from "./reducer-ip-geolocation";

const rootReducer = combineReducers({
    ipGeolocations: IpGeolocationReducer
});

export default rootReducer;