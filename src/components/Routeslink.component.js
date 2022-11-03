import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './login.component'
import SignUp from './signup.component'

export default class Routeslink extends Component {
    render(){
    return (
        <div className="outer">
            <div className="inner">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </div>
        </div>
    );
}
}