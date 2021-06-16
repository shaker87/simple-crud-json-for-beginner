import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import UserList from '../Pages/User/UserList';

const Home = () => {
  const history = useHistory()

  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const { data } = await axios.get("http://localhost:8000/users")
    setUsers(data)
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8000/users/${id}`)
    loadData()
  }

  return (
    <div className="container mt-5">
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            users.map((user, index) => <UserList user={user} deleteUser={deleteUser} key={index}></UserList>)
          }

        </tbody>
      </table>


    </div>
  );
};

export default Home;