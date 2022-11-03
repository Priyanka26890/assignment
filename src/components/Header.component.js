import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.jfif';
import { Routes, Route, Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>
                        <img src={logo} alt="logo" style={{ width: 50, heiht: 50 }} />
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-in'}>
                                    Sign in
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-up'}>
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            );
    }
}