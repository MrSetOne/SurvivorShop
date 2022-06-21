import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductsContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UserPage from "./components/UserPage/UserPage";
import Store from "./components/Store/Store";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/OrderState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <UserProvider>
            <ProductProvider>
              <OrdersProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/user/:id" element={<UserPage />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/update" element={<UpdateUser />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
              </OrdersProvider>
            </ProductProvider>
          </UserProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
