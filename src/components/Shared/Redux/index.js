import { combineReducers } from 'redux';
import navbar from '../../Navbar/NavbarReducer';
import stocksWidget from '../../StocksWidget/StockWidgetReducer';
import singleStock from '../../SingleStockWidget/SingleStockWidgetReducer';

const index = combineReducers({
  navbar,
  stocksWidget,
  singleStock
});

export default index;
