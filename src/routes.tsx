import Login from 'pages/auth/login';
import NewBusiness from 'pages/auth/new-business';
import Dashboard from 'pages/dashboard';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/auth/register';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create-business-account" component={NewBusiness} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default Routes;
