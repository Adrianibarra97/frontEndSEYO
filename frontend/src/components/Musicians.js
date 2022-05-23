import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/musicians.css';

export class Musicians extends Component {
    state = {
        musicians: []
    }

    musicians = () => {
        return this.state.musicians;
    }

    getmusicians = async () => {
        await axios.get('http://127.0.0.1:8000/api/musicians')
        .then(res => {
            const data = res.data;
            this.setState({musicians: data});
            console.log(this.state.musicians);
        })
        .catch(error => {
            alert(error);
        });
    }

    componentDidMount = () => {
        this.getmusicians();
    }

    render() {
        return (
            <div className="musicians-container">
                {
                    this.musicians().map((musician, index) => 
                        <div className="div-musician" key={index}>
                            <div className="div-musician-concealer">
                                <div className="div-musician-image">
                                    {musician.image}
                                </div>
                                <h3 className="div-musician-h3">
                                    {musician.name}
                                </h3>
                            </div>
                            <Link className="div-musician-p-instagram" to="/">
                                {musician.instagram}
                            </Link>
                            <p className="div-musician-p-category">
                                {musician.category}
                            </p>
                            <p className="div-musician-p-jobs">
                                {musician.jobs}
                            </p>
                        </div>
                    )
                }
            </div>
        );
    }
}