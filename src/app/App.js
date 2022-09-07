import React from 'react';
import {Routes, Route} from "react-router-dom";
import Customer from "../pages/Customer/index";
import Item from "../pages/Item/item"

function App() {
    return(
        <Routes>
            <Route exact path='/' element={<Customer/>}/>
            <Route path="item" element={<Item/>}/>
        </Routes>
    );
}
export default App;
