import React from 'react'
import { initializeApp } from 'firebase/app';





const firebaseConfig = {
    apiKey: "AIzaSyCnWcrUgni6wzU3eqF7QGLFM_NYry_mhJg",
    authDomain: "reactapp-db-e391a.firebaseapp.com",
    databaseURL: "https://reactapp-db-e391a-default-rtdb.firebaseio.com",
    projectId: "reactapp-db-e391a",
    storageBucket: "reactapp-db-e391a.appspot.com",
    messagingSenderId: "874429237777",
    appId: "1:874429237777:web:869439a93df3d6b4413fb0"
};

initializeApp(firebaseConfig)



export default function Register(props) {


    let msgClasses = ['text-center']

    if (props.msgType) {
        msgClasses.push('text-success')
    } else {
        msgClasses.push('text-danger')
    }


    return (
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-6 rounded offset-3" style={{ backgroundColor: 'white', padding: '10px' }}>
                        <h3 className="text-center pb-1">Create an Account</h3>
                        <p className="text-center text-muted">Get started with free account</p>
                        <a href="" className="btn btn-primary btn-block">Signup via Facebook</a>
                        <a href="" className="btn btn-danger btn-block">Signup via Google</a>
                        <hr />
                        <p className={msgClasses.join(' ')}>{ props.message }</p>
                        <form onSubmit={props.submit}>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email address" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Create Password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="cnfpassword" placeholder="Repeat Password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create Account" className="btn btn-success btn-block" />
                            </div>
                            <div className="form-group text-center">
                                <p>Have an account? <a href="" onClick={props.switch}>Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
