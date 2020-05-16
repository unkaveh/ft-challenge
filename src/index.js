import React from 'react';
import { render } from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import defaultStore from './components/Shared/Redux/defaultStore';
import history from './components/Shared/history';
// MUI theming components
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
// page view
import LandingView from './views/LandingView'

render(
  <Provider store={defaultStore}>
    <Router history={history}>
      <Switch>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Route exact path="/" component={LandingView} />
        </MuiThemeProvider>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

module.hot.accept();
