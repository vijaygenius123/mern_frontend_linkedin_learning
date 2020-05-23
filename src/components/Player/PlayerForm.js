import React, { Component } from 'react'
import axios from 'axios'
export default class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:8080/players', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        }).then(resp => {
            console.log(resp.data);
        })
    }

    render() {
        return (
            <div className='row'>
                <h1 className="center">Add a new player</h1>
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="firstName" ref="firstName" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="lastName" ref="lastName" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="phone" ref="phone" />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="email" ref="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect" type="submit">Add</button>
                </form>

            </div>
        )
    }
}
