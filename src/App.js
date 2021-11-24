import './App.css';
import { Routes, Route } from "react-router-dom";
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
import MakeAdmin from './Component/Pages/MakeAdmin/MakeAdmin';
import ManageProduct from './Component/Pages/ManageProduct/ManageProduct/ManageProduct/ManageProduct';
import AddPost from './Component/Pages/AddPost/AddPost/AddPost';
import Payment from './Component/Pages/Payment/Payment/Payment';
import DashboardDoc from './Component/Pages/Dashboard/DashboardDoc/DashboardDoc';
import AdminRoute from './Component/AdminRoute/AdminRoute';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={
          <PrivetRoute>
            <ProductBay />
          </PrivetRoute>
        } />
        <Route path="orders" element={
          <PrivetRoute >
            <OrdersProduct />
          </PrivetRoute>
        } />
        <Route path="dashboard/*" element={<PrivetRoute><Dashboard /></PrivetRoute>} >
          <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="manageProduct" element={<ManageProduct />} />
          <Route path="payment" element={<Payment />} />
          <Route path="dashboardDoc" element={<DashboardDoc />} />
          <Route path="" element={<DashboardDoc />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
