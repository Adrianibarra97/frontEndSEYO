import React, { Component } from 'react';
import axios from 'axios';
import '../css/contact.css';

export class Contact extends Component {
    state = {
        completeName: '',
        phone: '',
        email: '',
        content: '',
        sendTo: 'adribirra@gmail.com',
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        //let canSaveMail = confirm("Can we save your mail to our data base for send it information?")
        const newPost = {
            from: this.state.email,
            to: this.state.sendTo,
            subject: 'Consults for SEYO!',
            text: this.state.content,
            completeName: this.state.completeName,
            phone: this.state.phone,
            canSaveMail: true
        };
        const res = await axios.post('http://127.0.0.1:8000/api/contact', newPost);
        alert(console.log(res));
        window.location.href = '/';
    }

    render() {
        return (
            <div className="contact-container">
                <div className="contact-div">
                    <h2 className="contact-h2">CONTACT!</h2>
                    <form className="contact-form" onSubmit={this.onSubmit}>
                        <input type="text"
                            required={true}
                            className="contact-input i1"
                            placeholder="Name and Surname:"
                            name="completeName"
                            onChange={this.onInputChange}
                            value={this.state.completeName}
                        />
                        <input type="number"
                            required={true}
                            className="contact-input i2"
                            placeholder="Phone:"
                            name="phone"
                            onChange={this.onInputChange}
                            value={this.state.phone}
                        />
                        <input type="email"
                            required={true}
                            className="contact-input i3"
                            placeholder="E-mail:"
                            name="email"
                            onChange={this.onInputChange}
                            value={this.state.email}
                        />
                        <textarea type="text"
                            required={true}
                            className="contact-textarea"
                            placeholder="Message:"
                            name="content"
                            onChange={this.onInputChange}
                            value={this.state.content}
                        />
                        <button className="contact-button"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}