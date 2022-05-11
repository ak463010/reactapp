import React, { Component } from 'react'
import Login from './Login.js'
import Register from './Register.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            message: null,
            // 0 danger 1 success
            msgType: null,
        }
    }

    pageSwitchHandler = (e) => {
        e.preventDefault()
        this.setState({page: !this.state.page})
    }

    registrationHandler = (e) => {
        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;
        let cnfpassword = e.target.cnfpassword.value;
        if (password !== cnfpassword) {
            this.setState({ message: 'Password does not match', msgType: 0 })
            return;
        }
        

        // FIREBASE CODE
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                this.setState({ message: 'Registration Successfully', msgType: 1 }, () => {
                    email = e.target.email.value = '';
                    password = e.target.password.value = '';
                    cnfpassword = e.target.cnfpassword.value = '';
                })
            })
            .catch((error) => {
                const msg = error.message;
                this.setState({message: msg, msgType: 0})
            })
    }

    render() {
        return (
            <>
                {
                    this.state.page ? <Login switch={ this.pageSwitchHandler } /> : <Register msgType={this.state.msgType} message={this.state.message} switch={ this.pageSwitchHandler } submit={this.registrationHandler} />
                }




            </>
        )
    }
}



export default Container;