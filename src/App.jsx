import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from './Components/utils/routes';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
const {theme} = useContextGlobal()

return (
  <div style={{ background: theme.background, color: theme.font }}>
    <Navbar/>
    <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.contact} element={<Contact/>}/>
      <Route path={routes.detail} element={<Detail/>}/>
      <Route path={routes.favs} element={<Favs/>}/>
      <Route path="*" element={<h1>ERROR 404,PAGINA NO ENCONTRADA</h1>} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
