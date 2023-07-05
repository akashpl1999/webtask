import './App.css';
import Register from './Componets/UserModel/Register';
import Login from './Componets/UserModel/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from './Componets/Dashbord/Userlist';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="list" element={<Userlist />} ></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
