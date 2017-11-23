import queryString from 'query-string';
import { GOODS_LIST_REQUEST, GOODS_LIST_FAIL, GOODS_LIST_SUCCESS } from '../constants/actionTypes';
import { GOODS_LIST } from '../constants/api';

function addRequest() {
  return {
    type: GOODS_LIST_REQUEST
  }
}

function finishRequest(json, params) {
  const res = Object.assign(json.data, params);
  console.log('action res', res)

  return {
    res,
    type: GOODS_LIST_SUCCESS
  };
}

function rejectRequest() {
  return {
    type: GOODS_LIST_FAIL
  };
}

export function fetchList() {
  return (dispatch, getState) => {
    dispatch(addRequest())
    console.log('queryString', queryString.parse(getState().routing.location.search))
    console.log('getState()', getState().routing.location)
    const { pageIndex }  = queryString.parse(getState().routing.location.search)


    const params = { pageIndex };

    console.log('88888888fetchList')
    try {
      fetch(`${GOODS_LIST}${pageIndex || 1}`)
        .then(response => { console.log(response); return response.json() })
        .then(json => { console.log(json); return dispatch(finishRequest(json, params)) })
    } catch (e) {
      dispatch(rejectRequest());
      return;
    }
  }
}
