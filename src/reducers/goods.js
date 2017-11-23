import {
    // SELECT_REDDIT,
    // INVALIDATE_REDDIT,
    // REQUEST_POSTS,
    // RECEIVE_POSTS
    GOODS_LIST_REQUEST,
    GOODS_LIST_SUCCESS,
    GOODS_LIST_FAIL
} from '../constants/actionTypes';

const initState = {
    total: 0,
    loading: false,
    lists: []
};

export default function goods(state = initState, action) {
    // console.log('reducer action.res', action.res.data)
    switch (action.type) {
        case GOODS_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GOODS_LIST_SUCCESS:
            const { lists, total } = action.res;
            return {
                lists,
                total,
                loading: false
            }
        case GOODS_LIST_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
