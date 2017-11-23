import queryString from 'query-string';
import { push, go, replace } from 'react-router-redux';
export function updateQuery(newQuery) {
    return (dispatch, getState) => {
        const { pathname, state } = getState().routing.location;
        const oldQuery = queryString.parse(getState().routing.location.search);
        const newestQuery = {
            ...oldQuery,
            ...newQuery
        }
        const nowQuery = queryString.stringify(newestQuery)
        const location = {
            pathname,
            state,
        };
        location.search = '?'+nowQuery;
        // ？getState().routing.location.search 手动更新
        getState().routing.location.search =  '?'+nowQuery;

        // ？push 后应该刷新页面，但这里只是URL变了，所以在 组件的changePage 中，再手动触发 fetchList
        dispatch(push(location));
    }
}