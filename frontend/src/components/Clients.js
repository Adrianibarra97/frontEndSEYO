import React, { Component } from 'react';
import axios from 'axios';
import '../css/clients.css';

export class Clients extends Component {
    state = {
        clients: []
    }

    clients = () => {
        return this.state.clients;
    }

    getClients = async () => {
        await axios.get('http://127.0.0.1:8000/api/clients')
        .then(res => {
            const data = res.data;
            this.setState({clients: data});
        })
        .catch(error => {
            alert(error);
        });
    }

    componentDidMount = () => {
        this.getClients();
    }

    render() {
        return (
            <div className="clients-container">
                {
                    this.clients().map((client, index) => 
                        <div className="div-client" key={index}>
                            <div className="div-client-concealer">
                                <div className="div-concealer-image">
                                    <img src={client.image} alt={client.name}/>
                                </div>
                                <div className="div-concealer-score">
                                    SCORE{/* {client.score} */}
                                </div>
                            </div>
                            <h3 className="div-client-h3">
                                {client.name}
                            </h3>
                            <p className="div-client-p-description">
                                {client.description}
                            </p>
                        </div>
                    )
                }
            </div>
        );
    }
}