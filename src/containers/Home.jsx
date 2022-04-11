import React, { Component } from "react";

import Form from "../components/Form";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            msg: null,
        };
        this.myRef = React.createRef();
    }

    onChangeInput = (e) => {
        console.log(e);
        this.setState((state) => {
            return { ...state, [e.target.name]: e.target.value };
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                ...state,
                msg: `Your identity is : ${this.state.firstname} ${this.state.lastname} ${this.state.age}yo`,
            };
        });
            
    };

    render() {
        return (
            <main role="main" id="home">
                <Form
                    myRef={this.myRef}
                    inputs={this.state}
                    onChangeInput={this.onChangeInput}
                    onSubmitForm={this.onSubmitForm}
                />

                {this.state.msg && <p>{this.state.msg}</p>}

            </main>
        );
    }
}

export default Home;
