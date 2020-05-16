import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    maxWidth: 385,
  },
});

function StockAutoComplete({data, handleAddStock, handleInputChange}) {
  const classes = useStyles();
  return (
    <Box 
      px={3}
      mt={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      {data && 
            <Card className={classes.card}>
              <CardContent>
                <Autocomplete
                  id="combo-box"
                  options={data[0].quotes}
                  style={{ width: 300 }}
                  onChange={handleInputChange}
                  renderInput={(params) => <TextField {...params} label="Top Quotes" variant="outlined" />}
                />
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleAddStock}>Add Stock +</Button>
              </CardActions>
            </Card>
      }
    </Box>
  );
}

export default StockAutoComplete