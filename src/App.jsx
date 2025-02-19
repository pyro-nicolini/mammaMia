import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer footerText={'© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados'}/>
    </>
  )
}

export default App
