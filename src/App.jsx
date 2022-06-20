import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { ProductProvider } from "./context/ProductsContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import UserPage from './components/UserPage/UserPage';
import Store from './components/Store/Store'
import Login from "./components/Login/Login";

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <UserProvider>
            <ProductProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="/store" element={<Store />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              <Footer />
            </ProductProvider>
          </UserProvider>
        </BrowserRouter>
      </div>
    );
}

export default App;