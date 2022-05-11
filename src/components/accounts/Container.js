import React, { Component } from 'react'
import Register from './Register'
import Login from './Login'
import { initializeApp } from 'firebase/app';
import { GithubAuthProvider, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnWcrUgni6wzU3eqF7QGLFM_NYry_mhJg",
    authDomain: "reactapp-db-e391a.firebaseapp.com",
    databaseURL: "https://reactapp-db-e391a-default-rtdb.firebaseio.com",
    projectId: "reactapp-db-e391a",
    storageBucket: "reactapp-db-e391a.appspot.com",
    messagingSenderId: "874429237777",
    appId: "1:874429237777:web:869439a93df3d6b4413fb0"
};


export default class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            msg: null,
            msgType: 0,
        }
    }


    switchHandler = (e) => {
        e.preventDefault()
        this.setState({ page: !this.state.page })
    }

    registerHandler = (e) => {
        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;
        let cnfpassword = e.target.cnfpassword.value;

        if (password !== cnfpassword) {
            this.setState({ msg: 'Password not match', msgType: 0 })
            return;
        }



        // FIREBASE
        initializeApp(firebaseConfig)
        const auth = getAuth()
        let promise = createUserWithEmailAndPassword(auth, email, password)
        promise
            .then((userCredential) => {
                this.setState({ msg: 'Registration Successfull', msgType: 1, page: 1 }, () => {
                    e.target.email.value = ''
                    e.target.password.value = ''
                    e.target.cnfpassword.value = ''

                })

            })
            .catch((error) => {
                this.setState({ msg: error.message, msgType: 0 })
            })

    }

    loginHandler = (e) => {
        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;

        initializeApp(firebaseConfig)
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // signed in
                const user = userCredential.user;
                sendEmailVerification(user)
                if (user.emailVerified === true) {
                    this.setState({ msg: 'Login Successfully !', msgType: 1 })
                } else {
                    this.setState({ msg: 'Email not veryfied yet !', msgType: 0 })
                }
            })
            .catch((error) => {
                this.setState({ msg: error.message, msgType: 0 })
            })
    }


    googleLoginHandler = (e) => {
        e.preventDefault()
        initializeApp(firebaseConfig)
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                this.setState({ msg: 'Login Successfully with Google !', msgType: 1, page: 1 })
            })
            .catch((error) => {
                this.setState({ msg: error.message, msgType: 0 })
            })
    }

    facebookLoginHandler = (e) => {
        e.preventDefault()
        initializeApp(firebaseConfig)
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                this.setState({ msg: 'Login Successfully with Facebook !', msgType: 1, page: 1 })
            })
            .catch((error) => {
                this.setState({ msg: error.message, msgType: 0 })


            })
    }


    githubLoginHandler = (e) => {
        e.preventDefault()
        initializeApp(firebaseConfig)
        const auth = getAuth()
        const provider = new GithubAuthProvider()
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                this.setState({ msg: 'Login Successfully with Github', msgType: 1, page: 1 })
                console.log(userCredential.user);
            })
            .catch((error) => {
                this.setState({msg: error.message, msgType: 0})

            })
    }

    render() {
        return (
            <>
                {
                    this.state.page ? <Login githubLogin={this.githubLoginHandler} facebookLogin={this.facebookLoginHandler} googleLogin={this.googleLoginHandler} msgType={this.state.msgType} msg={this.state.msg} submit={this.loginHandler} switch={this.switchHandler} /> : <Register githubLogin={this.githubLoginHandler} facebookLogin={this.facebookLoginHandler} googleLogin={this.googleLoginHandler} msgType={this.state.msgType} msg={this.state.msg} submit={this.registerHandler} switch={this.switchHandler} />
                }

            </>
        )
    }
}
