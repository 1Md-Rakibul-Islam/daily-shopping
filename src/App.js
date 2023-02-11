import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import { CartPage, CategoryPage, Home } from './Pages';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = {<Home></Home>} />
          <Route path='/category/:id' element = {<CategoryPage></CategoryPage>} />
          <Route path='/cart' element = {<CartPage></CartPage>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
