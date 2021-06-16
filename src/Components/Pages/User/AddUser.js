import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddUser = () => {

    const history = useHistory()

    const [addUser, setAddUser] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const { name, email, phone } = addUser;

    const handleChange = e => {
        setAddUser({ ...addUser, [e.target.name]: e.target.value })

        console.log(addUser)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:8000/users", addUser)
        history.push('/')
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="name" value={name} placeholder="Enter name" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="email" value={email} placeholder="Enter email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={e => handleChange(e)} name="phone" value={phone} placeholder="Enter phone number" className="form-control" />
                        </div>

                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;