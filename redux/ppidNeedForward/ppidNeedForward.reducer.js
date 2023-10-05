import PPIDNeedForwardTypes from "./ppidNeedForward.types";
import INITIAL_STATE from './ppidNeedForward.initialStates';

const ppidNeedForwardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PPIDNeedForwardTypes.GET_PPID_NEED_FORWARD:
            return {
                ...INITIAL_STATE,
                data: {
                    ...state.data,
                    listData: action.payload,
                    success: true,
                }
            }
        default:
            return state;
    }
}

export default ppidNeedForwardReducer;