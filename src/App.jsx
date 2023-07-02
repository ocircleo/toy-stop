
import './App.css'
import { Outlet } from 'react-router-dom';
import Navigation from './compo/shared/nav/Navigation';
import Footer from './compo/shared/footer/Footer';

function App() {

  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
