import * as types from './StocksWidgetActions';

export default function stocksWidget (state = [], action) {
  switch (action.type) {

  case types.TOPGAINER_QUERY_REQUEST:
    return {...state, tgStocksLoading: true}
    
  case types.TOPGAINER_QUERY_SUCCESS:
    return {...state, tgStocks: action.payload, tgStocksLoading: false}
  
  default:
    return state
  }
}