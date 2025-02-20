import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{justifyContent: 'space-between', height: '100%', flexDirection:'column'}} className='bg-dark d-flex'>
    <Navbar />
    <Home />
    <Footer footerText={'© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados'}/>
    </div>
  )
}

export default App
