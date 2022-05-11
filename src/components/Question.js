import React from 'react'

function Question(props) {
    return (
        <>
            <div className="container-fluid mt-2 col-6 offset-3 p-4" style={{backgroundColor: '#fff',}}>
                <form onSubmit={props.submit}>
                    <div className="form-group">
                        <label htmlFor=""><b>3.</b> What are you currently doing ? </label><br />
                        <input type="radio" name="doing" value="teaching" />
                        <label htmlFor="teaching">Teaching</label> {' '}

                        <input type="radio" name="doing" value="student" />
                        <label htmlFor="student">Student</label> {' '}

                        <input type="radio" name="doing" value="programmer" />
                        <label htmlFor="programmer">Programmer</label> {' '}

                        <input type="radio" name="doing" value="other" />
                        <label htmlFor="other">Other</label> {' '}
                        
                        <input type="text" placeholder="Type here if not listed." className="form-control" name="other" />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""><b>4.</b> Please rate our courses. </label><br />
                        <input type="radio" name="rate" value="poor" />
                        <label htmlFor="poor">Poor</label> {' '}

                        <input type="radio" name="rate" value="good" />
                        <label htmlFor="good">Good</label> {' '}

                        <input type="radio" name="rate" value="excellent" />
                        <label htmlFor="excellent">Excellent</label> {' '}
                    </div>
                    <div className="form-group">
                        <label>Write your review here.: </label>
                        <textarea name="review" cols="10" rows="2" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-sm" type="submit">Save</button>
                        <div className="number text-center">
                            <span className="text-center" style={{ borderRadius: '10%', padding: '5px', }}>1</span>
                            <span className="text-center btn-primary" style={{ borderRadius: '10%', padding: '5px', }}>2</span>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}


export default Question;