import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const EditUser = () => {

    const {id} = useParams()
    const history = useHistory()

    const [editUser, setEditUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const {name, email, phone} = editUser;
  
    useEffect(() => {
      loadSingleUserData()
    }, [])
  
    const loadSingleUserData = async () => {
      const { data } = await axios.get(`http://localhost:8000/users/${id}`)
      setEditUser(data)
    }

    const handleChange = e => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:8000/users/${id}`, editUser)
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

                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;