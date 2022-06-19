import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { GlobalProvider } from "./context/GlobalState";
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import UserPage from './components/UserPage/UserPage';
import Store from './components/Store/Store'

function App() {
    return ( 
        <div className = "App" >
            <BrowserRouter>
                <GlobalProvider>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<LandingPage/>}/>
                        <Route path='/user/:id' element={<UserPage/>}/>
                        <Route path='/store' element={<Store/>}/>
                    </Routes>
                    <Footer/>    
                </GlobalProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;