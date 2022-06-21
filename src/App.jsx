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
import LogPage from "./components/LogPage/LogPage";
import UpdateUser from './components/UpdateUser/UpdateUser';

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
                <Route path="/logpage" element={<LogPage />} />
                <Route path="/update" element={<UpdateUser/>} />
              </Routes>
              <Footer />
            </ProductProvider>
          </UserProvider>
        </BrowserRouter>
      </div>
    );
}

export default App;