import React from 'react'

function Details(props) {

    return (
        <>
            <div className="container-fluid mt-2 col-6 offset-3 p-4" style={{backgroundColor: '#fff',}}>
                <form action="" onSubmit={props.submit}>
                    <div className="form-group">
                        <label htmlFor="name"><b>1.</b> Name </label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><b>2.</b> Email </label>
                        <input type="email" className="form-control" placeholder="Enter your email" name="email" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-sm" type="submit">Next</button>
                        <div className="number text-center">
                            <span className="text-center btn-primary" style={{ borderRadius: '10%', padding: '5px' }}>1</span>
                        <span className="text-center" style={{ borderRadius: '10%', padding: '5px' }}>2</span>
                        </div>
                    </div>


                </form>
            </div>


            

        </>
    )
}



export default Details;