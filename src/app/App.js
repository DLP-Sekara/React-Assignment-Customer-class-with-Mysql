import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App';
import {Routes, Route} from "react-router-dom";
import reportWebVitals from '../reportWebVitals';

function App() {
    return(
        <Routes>
            <Route exact path='/' element={<Customer/>}/>
            <Route path='item' element={<Item/>}/>
        </Routes>
    );
}
export default App;
