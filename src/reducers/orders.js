import {
  // SELECT_REDDIT,
  // INVALIDATE_REDDIT,
  // REQUEST_POSTS,
  // RECEIVE_POSTS
} from '../constants/actionTypes';

const initState = {
    total: 0,
    loading: false,
    currentPid: undefined,
    list: []
};

export default function orders(state = initState, action) {
    switch (action.type) {
    default:
        return state;
    }
}
