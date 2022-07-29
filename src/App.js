// React-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Components
import Navbar from './compoenets/Navbar';
import Footer from './compoenets/Footer';
// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectEdit from './pages/ProjectEdit';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/projectEdit/:id' element={<ProjectEdit />}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
