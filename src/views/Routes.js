import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
