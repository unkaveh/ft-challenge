import axios from 'axios';

const API_ROOT = process.env.STOCK_APP_API_ROOT
const API_KEY = process.env.STOCK_APP_API_KEY

//========Action Types=========
export const MOSTWATCHED_QUERY_REQUEST = 'MOSTWATCHED_QUERY_REQUEST';
export const MOSTWATCHED_QUERY_SUCCESS = 'MOSTWATCHED_QUERY_SUCCESS';
export const SET_SINGLE_STOCK = 'SET_SINGLE_STOCK';

export const SINGLESTOCK_QUERY_REQUEST = 'SINGLESTOCK_QUERY_REQUEST';
export const SINGLESTOCK_QUERY_SUCCESS = 'SINGLESTOCK_QUERY_SUCCESS';

export const setSingleStock = (stockName) => ({
  type: SET_SINGLE_STOCK,
  stockName,
})


export const queryMostWatched = (requestData) => (dispatch) => {
  dispatch({type: MOSTWATCHED_QUERY_REQUEST});
  return axios({
    method: 'GET',
    url: API_ROOT + '/tr/trending',
    headers: {
      'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
		    'x-rapidapi-key': API_KEY
    }
  })
    .then(response => {
      dispatch({
        type: MOSTWATCHED_QUERY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    });
}

export const querySingleStock = (stockName) => (dispatch) => {
  dispatch({type: SINGLESTOCK_QUERY_REQUEST});
  return axios({
    method: 'GET',
    url: API_ROOT + '/qu/quote/' + stockName,
    headers: {
      'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
		    'x-rapidapi-key': API_KEY
    }
  })
    .then(response => {
      dispatch({
        type: SINGLESTOCK_QUERY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    });
}
