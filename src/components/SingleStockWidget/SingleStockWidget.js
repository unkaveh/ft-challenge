import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StockAutoComplete from './StockAutoComplete';

//redux additions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as singleStockActions from './SingleStockWidgetActions'

const styles = theme => ({
  table: {
    maxWidth: 800,
    minWidth: 400
  },
  title: {
    fontSize: 14,
  },
  card: {
    minWidth: 275,
    padding: 24,
    marginRight: 24,
    marginLeft: 24
  },
  button: {
    marginLeft: 'auto'
  },
  header: {
    textAlign: 'center',
    marginTop: 32
  }
})

class SingleStocksWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteInput: '',
      localHolder: []
    }
  }

  componentDidMount() {
    this.props.actions.queryMostWatched();
  }

  handleAddStock = () => {
    if (this.state.quoteInput !== null) {
      this.setState({
        localHolder: [...this.state.localHolder, this.props.localStackStocks[0]]
      })
    }
  }

    removeStock = (name) => {
      this.setState({
        localHolder: this.state.localHolder.filter(el => el !== name)
      })
    }
    
    
    render() {
      const {mostCommonStocks, classes} = this.props;
      const {localHolder} = this.state;

      function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

      return (
        <>
        <Typography variant="h4" className={classes.header}>Individual Stocks</Typography>
          <Box 
            px={3}
            mt={4}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            
            {localHolder && localHolder.length > 0 &&
                    localHolder.map(item => 
                      <Card className={classes.card}>
                        <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {item.shortName}
                          </Typography>
                          <Typography variant="body2" component="p">
                                    Regular Market Price: {currencyFormat(item.regularMarketPrice)}<br />
                                    Symbol: {item.symbol}<br />
                                    Previous Day Close: {currencyFormat(item.regularMarketPreviousClose)}<br/>
                                    Post Market Change Percent: {item.postMarketChangePercent ? (item.postMarketChangePercent.toFixed(2)):('N/A')}%
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button 
                            size="small" 
                            className={classes.button}
                            onClick={() => {
                              this.removeStock(item)
                            }}
                          >
                                        Remove
                          </Button>
                        </CardActions>
                      </Card>
                    )
            }
          </Box>
          <StockAutoComplete 
            data={mostCommonStocks} 
            handleAddStock={this.handleAddStock}
            handleInputChange={(event, value) => this.setState({quoteInput: value}, ()=> this.props.actions.querySingleStock(this.state.quoteInput))}
          />
        </>
      )
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(singleStockActions, dispatch)
  }
}

export function mapStateToProps(state) {
  return {
    mostCommonStocks: state.singleStock.mwStocks,
    localStock: state.singleStock.stockName,
    localStackStocks: state.singleStock.rqSingleStock
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SingleStocksWidget));