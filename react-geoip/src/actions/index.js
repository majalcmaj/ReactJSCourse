import {FETCH_GEOIP} from "../common/constants";
import axios from "axios";
const ROOT_URL = "http://freegeoip.net/json";


export function fetchIpGeolocation(ip) {
    const request = axios.get(`${ROOT_URL}/${ip}`);
    return {
        type: FETCH_GEOIP,
        payload: request
    }
}