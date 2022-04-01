import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Inventry from './Components/Inventory/Inventry';


function App() {
  return (
<div>
  <Header></Header>
   <Routes>
     <Route path='/home'></Route>
     <Route path='/' element={<Shop></Shop>}></Route>
     <Route path='/order' element={<Orders></Orders>}></Route>
   <Route path='/inventory' element={<Inventry></Inventry>}></Route>
   </Routes>
   </div>
   
  );
}

export default App;
