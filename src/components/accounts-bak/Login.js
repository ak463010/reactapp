import React from 'react'

export default function Login(props) {
    return (
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-6 rounded offset-3" style={{ backgroundColor: 'white', padding: '10px' }}>
                        <h3 className="text-center pb-2">Login</h3>
                        <a href="" className="btn btn-primary btn-block">Login With Facebook</a>
                        <a href="" className="btn btn-danger btn-block">Login With Google</a>
                        <hr />
                        <form action="">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email address" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn btn-success btn-block" />
                            </div>
                            <div className="form-group text-center">
                                <p><a href="" onClick={props.switch}>Create </a> and acccount</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
