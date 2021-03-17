import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from '../components/Store';
import Cart from '../components/Cart';
import App from '../components/App';
import Error from '../common/Error';
import './Global.css';

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/store" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  )
}

export default Routes;