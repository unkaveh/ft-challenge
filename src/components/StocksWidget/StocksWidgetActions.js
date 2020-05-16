import axios from 'axios';

const API_ROOT = process.env.STOCK_APP_API_ROOT
const API_KEY = process.env.STOCK_APP_API_KEY

//========Action Types=========

export const TOPGAINER_QUERY_REQUEST = 'TOPGAINER_QUERY_REQUEST';
export const TOPGAINER_QUERY_SUCCESS = 'TOPGAINER_QUERY_SUCCESS'

//=========Thunks===========

export const topGainer = (requestData) => (dispatch) => {
  dispatch({type: TOPGAINER_QUERY_REQUEST});
  return axios({
    method: 'GET',
    url: API_ROOT + '/ga/topgainers?start=0',
    headers: {
      'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
		    'x-rapidapi-key': API_KEY
    }
  })
    .then(response => {
      dispatch({
        type: TOPGAINER_QUERY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    });
}