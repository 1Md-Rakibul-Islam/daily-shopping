import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import { Provider } from 'react-redux';
import store from './Store/Store';


function App() {
  return (
    <div className="min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/cart' element = {<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
