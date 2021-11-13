import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Pages/Home/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import Contact from './Component/Pages/Contact/Contact';
import AuthProvider from './Component/Context/AuthProvider';
import OrdersProduct from './Component/Pages/OrdersProduct/OrdersProduct/OrdersProduct';
import Products from './Component/Pages/Products/Products/Products';
import Dashboard from './Component/Pages/Dashboard/Dashboard/Dashboard';
import PrivetRoute from './Component/PrivateRoute/PrivateRoute';
import Login from './Component/Pages/Login/Login/Login';
import Register from './Component/Pages/Login/Register/Register';
import ProductBay from './Component/Pages/Products/ProductBay/ProductBay';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <PrivetRoute exact path="/products/:id">
            <ProductBay />
          </PrivetRoute>
          <PrivetRoute path="/orders">
            <OrdersProduct />
          </PrivetRoute>
          <PrivetRoute path="/dashboard">
            <Dashboard />
          </PrivetRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
