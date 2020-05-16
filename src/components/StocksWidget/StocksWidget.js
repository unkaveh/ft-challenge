import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';

//redux additions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as stockActions from './StocksWidgetActions';

const styles = theme => ({
  table: {
    maxWidth: 980,
    minWidth: 400
  },
  title: {
      marginBottom: 32
  }
})



class StocksWidget extends Component {
  componentDidMount() {
    this.props.actions.topGainer();
  }
  render() {
    const {
      classes, 
      data, 
      topGainerLoading,
      topGainerStocks
    } = this.props;

    function currencyFormat(num) {
      return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
      <Box 
        px={3}
        mt={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5"className={classes.title}>Top Gaining Stocks</Typography>
        {!topGainerLoading ? (
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Stock Name</TableCell>
                  <TableCell align="right">Regular Market Price</TableCell>
                  <TableCell align="right">Quote Source Name</TableCell>
                  <TableCell align="right">Symbol</TableCell>
                  <TableCell align="right">Market Day High</TableCell>
                  <TableCell align="right">Market Day Low</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topGainerStocks && topGainerStocks.quotes.map((item) => 
                  <TableRow key={item.symbol}>
                    <TableCell component="th" scope="row">
                      {item.shortName}
                    </TableCell>
                    <TableCell align="right">{currencyFormat(item.regularMarketPrice)}</TableCell>
                    <TableCell align="right">{item.quoteSourceName}</TableCell>
                    <TableCell align="right">{item.symbol}</TableCell>
                    <TableCell align="right">{currencyFormat(item.regularMarketDayHigh)}</TableCell>
                    <TableCell  align="right">{currencyFormat(item.regularMarketDayLow)}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ):(
          <CircularProgress />
        )}
      </Box>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stockActions, dispatch)
  }
}

export function mapStateToProps(state) {
  return {
    topGainerLoading: state.stocksWidget.tgStocksLoading,
    topGainerStocks: state.stocksWidget.tgStocks
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StocksWidget));