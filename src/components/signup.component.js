import React, { Component } from "react";


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            error: {
                fname: '',
                lname: '',
                email: '',
                password:''
            }
        }
    }
    setValues = event => {
        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error }

        var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        switch (name) {
            case 'fname':
                error.fname = (value.length>1) ? "First name can not be empty" : "";
                break;
            case 'lname':
                error.lname = (value.length > 1) ? "Last name can not be empty" : "";
                break;
            case 'email':
                error.email = (!reg.test(value)) ? "Enter valid email" : "";
                break;
            case 'password':
                error.password = (value.length > 3) ? "Password field can not be empty" : "";
                break;
        }
        this.setState({ ...this.error, [name]: value })
    }


    onFormSubmit = event => {
       event.preventDefault();

     //   let error = { ...this.state.error }

        if (this.state.fname == "") {
            this.setState(prevState => ({
                error: {...prevState.error,fname: 'first name field can not be  empty'
                }
            }))
        }
        if (this.state.lname == "") {
            this.setState(prevState => ({
                error: {
                    ...prevState.error, lname: 'last name field can not be  empty'
                }
            }))
        }

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(this.state.email)) {
            this.setState(prevState => ({
                error: {
                    ...prevState.error, email:'Please enter valid email address.'
                }
            }))
        }

        if (this.state.password == "") {
            this.setState(prevState => ({
                error: { ...prevState, password:'Password field can not be empty' }
            }))
        }

    };


    render() {
        const { error } = this.state;
        return (
            <form onSubmit={this.onFormSubmit }>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text"
                        name="fname"
                        placeholder="First name"
                        onChange={this.setValues}
                        className={error.fname.length > 0 ? "is-invalid form-control" : "form-control"} />
                    {error.fname.length > 0 && (<span className="text-danger">{ error.fname }</span>)}
                   
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                        name="lname"
                        className="form-control"
                        placeholder="Last name"
                        onChange={this.setValues}
                        className={error.lname.length > 0 ? "is-invalid form-control" : "form-control"} />

                    {error.lname.length > 0 && (<span className="text-danger">{error.lname}</span>)}


                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.setValues}
                        className={error.email.length > 0 ? "is-invalid form-control" : "form-control"} />

                    {error.email.length > 0 && (<span className="text-danger">{error.email}</span>)}

                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.setValues}
                        className={error.password.length > 0 ? "is-invalid form-control" : "form-control"} />

                    {error.password.length > 0 && (<span className="text-danger">{error.password}</span>)}

                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}