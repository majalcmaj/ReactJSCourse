import ActionType from './ActionType';
import {Action} from "redux";
class ActionWithPayload <PayloadType> implements Action{
    public readonly type: ActionType;
    public readonly payload: PayloadType;

    constructor(type: ActionType, payload: PayloadType) {
        this.type = type;
        this.payload = payload;
    }
}

export default ActionWithPayload;