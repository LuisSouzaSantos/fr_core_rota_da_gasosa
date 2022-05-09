import Login from '../components/login'
import './style.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterAccount from '../components/login/registerAccount';
import Main from './main';

function App() {

    return (
            <div className="AppStyle">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/registerAccount" element={<RegisterAccount/>}></Route>
                <Route path="/admin/menu" element={<Main/>}></Route>
            </Routes>
            </BrowserRouter>
            </div>
    );
}

export default App;