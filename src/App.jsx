import { useState } from 'react'
// import './App.css'
import {Login} from './Pages/Login'
import {Register} from './Pages/Register'
import {Home} from './Pages/Home'
import { RegisterAsCompany } from './Pages/RegisterAsCompany';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CompanyHome } from './Pages/CompanyHome';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/registerAscompany' element = {<RegisterAsCompany/>}/>
        <Route path='/companyHome' element = {<CompanyHome/>}/>
      </Routes>
    </Router>
  )
}

export default App
