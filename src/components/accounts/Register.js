import React from 'react'

export default function Register(props) {
    let msgClass = ['text-center']
    if (props.msgType) {
        msgClass.push('text-success')
    } else {
        msgClass.push('text-danger')
    }


    return (
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-6 col-md-8 col-sm-10 rounded offset-3 offset-sm-1 offset-md-2" style={{ backgroundColor: 'white', padding: '10px' }}>
                        <h3 className="text-center pb-1">Create an Account</h3>
                        <p className="text-center text-muted">Get started with free account</p>
                        <a href="" onClick={props.facebookLogin} className="btn btn-primary btn-block">Signup via Facebook</a>
                        <a href="" onClick={props.googleLogin} className="btn btn-danger btn-block">Signup via Google</a>
                        <a href="" onClick={props.githubLogin} className="btn btn-warning btn-block">Signup via Github</a>
                        <hr />
                        <p className={msgClass.join(' ')}>{ props.msg }</p>
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
