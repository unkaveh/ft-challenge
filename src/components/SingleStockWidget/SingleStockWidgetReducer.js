import * as types from './SingleStockWidgetActions';

export default function singleStock (state = [], action) {
  switch (action.type) {
    
  case types.SET_SINGLE_STOCK:
    return {...state, stockName: action.stockName}

  case types.MOSTWATCHED_QUERY_REQUEST:
    return {...state, mwStocksLoading: true};
      
  case types.MOSTWATCHED_QUERY_SUCCESS:
    return {...state, mwStocks: action.payload, mwStocksLoading: false};

  case types.SINGLESTOCK_QUERY_REQUEST:
    return {...state}
    
  case types.SINGLESTOCK_QUERY_SUCCESS:
    return {...state, rqSingleStock: action.payload}
    
  default: 
    return state
  }
}