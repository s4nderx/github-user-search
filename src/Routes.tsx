import Search from 'pages/Search';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header  from "./core/components/Header";
import Home  from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/search">
                <Search></Search>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;