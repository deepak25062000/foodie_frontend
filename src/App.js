
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/signin';
import Signup from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
