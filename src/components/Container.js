import React, { Component } from 'react'
import Details from './Details';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyCnWcrUgni6wzU3eqF7QGLFM_NYry_mhJg",
    authDomain: "reactapp-db-e391a.firebaseapp.com",
    databaseURL: "https://reactapp-db-e391a-default-rtdb.firebaseio.com",
    projectId: "reactapp-db-e391a",
    storageBucket: "reactapp-db-e391a.appspot.com",
    messagingSenderId: "874429237777",
    appId: "1:874429237777:web:869439a93df3d6b4413fb0"
};






class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uuidv4(),
            name: null,
            email: null,
            isSubmited: false,
            questions: {
                doing: null,
                rate: null,
                other: null,
                review: null,
            }
        }
    }

    detailsSubmitHandler = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        this.setState({
            name, email,
        })
    }


    questionsSubmitHandler = (e) => {
        e.preventDefault();
        let questions = {}
        questions.doing = e.target.doing.value;
        questions.rate = e.target.rate.value;
        questions.other = e.target.other.value;
        questions.review = e.target.review.value;

        this.setState({ questions, isSubmited: true }, () => {
            initializeApp(firebaseConfig);
            const db = getDatabase();
            set(ref(db, 'users/' + this.state.id), {
                name: this.state.name,
                email: this.state.email,
                questions: this.state.questions,

            });
        })



    }



    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row col-10 offset-1 card mt-2">
                        <h2 className="text-center text-primary">Survey App</h2>
                    </div>
                </div>
                {
                    this.state.isSubmited === true ? <div><h2>Thank You</h2></div> :
                    this.state.name === null && this.state.email === null ? <Details submit={this.detailsSubmitHandler} /> : <Question submit={this.questionsSubmitHandler} />
                }


            </>
        )
    }
}


export default Container;
