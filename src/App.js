import React from 'react'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Routeslink from './components/Routeslink.component'
import Header from './components/Header.component'

function App() {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Routeslink></Routeslink>
               
            </div>
        </Router>
    )
}

export default App