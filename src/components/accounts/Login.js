import React from 'react'





export default function Login(props) {
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
                        <h3 className="text-center pb-2">Login</h3>
                        <a href="" onClick={props.facebookLogin} className="btn btn-primary btn-block">Login With Facebook</a>
                        <a href="" onClick={props.googleLogin} className="btn btn-danger btn-block">Login With Google</a>
                        <a href="" onClick={props.githubLogin} className="btn btn-warning btn-block">Login With Github</a>
                        <hr />
                        <p className={msgClass.join(' ')}>{ props.msg }</p>
                        <form onSubmit={props.submit} name="form">
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
