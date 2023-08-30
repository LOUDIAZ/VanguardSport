import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Carousel from './components/Carousels/Carousels';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
        <NavBar />
        <Carousel/>
        <ItemListContainer greeting={"Bienvenidos"} />
        <Footer/>
    </>
  )
}

export default App
