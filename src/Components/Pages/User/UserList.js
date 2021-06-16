import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({user, deleteUser}) => {
    const {id, name, email, phone} = user;
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <Link to={`/edit-user/${id}`}><button className="btn btn-primary">Edit</button></Link>
                <button onClick={() => deleteUser(id)} className="btn btn-danger ml-2">Delete</button>
            </td>
        </tr>
    );
};

export default UserList;