import Login from 'pages/auth/login';
import NewBusiness from 'pages/auth/new-business';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/auth/register';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/create-business-account" exact component={NewBusiness} />
    </Switch>
);

export default Routes;
