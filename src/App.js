
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './components/Data';
import Navbar from './components/Navbar';
import Blogform from './components/Blogform';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/blog' element={<Data/>}/>
        <Route path='/form' element={<Blogform/>}/>
     </Routes>

     
    </div>
  );
}

export default App;
