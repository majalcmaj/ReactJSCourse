import {FETCH_GEOIP} from "../common/constants";

export default function(state=createState([], false), action) {
    switch(action.type) {
        case FETCH_GEOIP:
            console.log(state);
            if(action.error === true) {
                return createState(state.values, true);
            } else {
                const currentValues = state.values.slice(0,4);
                return createState([action.payload.data, ...currentValues], false);
            }
        default:
            return state;
    }
}

function createState(values, error) {
    return {
        values: values,
        error: error
    };
}