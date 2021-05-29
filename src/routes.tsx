import Login from 'pages/auth/login';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/auth/register';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
    </Switch>
);

export default Routes;
