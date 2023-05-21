import logo from './logo.svg';
import './App.css';
import Reactcreate from './Reactcreate';
import Read from './Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactUpdate from './ReactUpdate';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Reactcreate />}/>
    <Route exact path="/read" element={<Read />}/>

    <Route exact path="/ReactUpdate" element={<ReactUpdate />}/>
    </Routes>
    </BrowserRouter>
    
    
  
  );
}

export default App;
