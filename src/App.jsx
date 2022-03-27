
import './App.scss';
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/pages/Home';
import Favourite from './Components/pages/Favorites';
import Notfound from './Components/pages/Notfound';
import Cards from './Components/pages/Cards';

function App() {
  return (
    <Router>
      <div className='appContainer'> 
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favourite />} />
           <Route path="/card" element={<Cards />} />
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
