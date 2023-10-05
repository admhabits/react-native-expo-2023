import PPIDNeedResponseTypes from "./ppidNeedResponse.types";
import INITIAL_STATE from './ppidNeedResponse.initialStates';

const ppidNeedResponseReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PPIDNeedResponseTypes.GET_PPID_NEED_RESPONSE:
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

export default ppidNeedResponseReducer;