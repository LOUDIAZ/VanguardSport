import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"} />
    </>
  )
}

export default App