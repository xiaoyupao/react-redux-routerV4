import { push, go, replace } from 'react-router-redux';
export function updateQuery(newQuery) {
    return (dispatch, getState) => {
        const { pathname, query, state } = getState().routing.locationBeforeTransitions;
       
        const location = {
            pathname,
            state,
            query: {
                ...query,
                ...newQuery
            }
        };

        // 切换到router 2.0 则 location change了
        dispatch(push(location));
    }
}