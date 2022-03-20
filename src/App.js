import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import "./App.css";
import LatestPurchase from "./pages/LatestPurchase";
import Buy from "./pages/Buy";
function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-sm bg-light'>
          <ul className='navbar-nav'>
            <li className='nav-link'>
              <Link to='/customers'>Customers </Link>
            </li>
            <li className='nav-link'>
              <Link to='/products'>Products </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/customers'>
            <AppCustomers />
          </Route>
          <Route exact path='/products'>
            <AppProducts />
          </Route>
          <Route path='/customers/:id'>
            <LatestPurchase />
          </Route>
          <Route path='/products/:id'>
            <Buy />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
