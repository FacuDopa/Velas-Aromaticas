//Css
import './Sass/App.css';

//Modulos
import { NavBar } from './components/navBar/NavBar';
import { CardListContainer } from './components/CardListContainer/CardListContainer';
import { CardDetailContainer } from './components/CardDetailConteiner/CardDetailConteiner';
import { Cart } from './components/Cart/Cart';
import { CheckOut } from './components/CheckOut/CheckOut';
import { Footer } from './components/Footer/Footer';

//Firebase
import { cargarDB, añadirPDB  } from './firebase/firebase';

// Import react-R-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { CarritoProvider } from './Context/CarritoContext';

function App() {

  // cargarDB()
  // añadirPDB()

  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<CardListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<CardListContainer/>}/>
          <Route path='/producto/:id' element={<CardDetailContainer/>}/>
          <Route path='/Carrito' element={<Cart/>}/>
          <Route path='/Checkout' element={<CheckOut/>}/>
        </Routes>
        <Footer/>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
