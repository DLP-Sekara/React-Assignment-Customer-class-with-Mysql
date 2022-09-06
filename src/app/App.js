import React from 'react';
import {Routes, Route} from "react-router-dom";
import Customer from "../pages/Customer/index";

function App() {
    return(
        <Routes>
            <Route exact path='/' element={<Customer/>}/>

        </Routes>
    );
}
export default App;
