import React, { Component } from "react";
import styles from './form.module.css'

class Form extends Component {
    constructor(props){
        super(props)
        
    }
    
    render() {
        console.log(this.props.myRef);
        return (
            <form className={styles.form} onSubmit={this.props.onSubmitForm} ref={this.props.myRef}
                
                >
                <label className={styles.label} htmlFor="firstname">Firstname :</label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={this.props.inputs.firstname}
                    onChange={this.props.onChangeInput}
                />

                <label className={styles.label} htmlFor="lastname">lastname :</label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={this.props.inputs.lastname}
                    onChange={this.props.onChangeInput}
                />

                <label className={styles.label} htmlFor="age">age :</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={this.props.inputs.age}
                    onChange={this.props.onChangeInput}
                />

                <input type="file" name="" id="" />

                <input type="submit" value="send"/>
            </form>
        );
    }
}

export default Form;
