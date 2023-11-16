import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
const Admin = () => {
  const [users, setUsers] = useState([]);
  const fetchAllUsers = async () => {
    const data = await fetch('/api/users/allUsers');
    const users = await data.json();
    console.log(users);
    setUsers(users);
  }
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Compnay</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Address</th>
          <th>City</th>
          <th>Province</th>
          <th>Postal Code</th>
          <th>E-Waste Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 && users.map((user, index) => <TableRow user={user} index={index} key={index} />)}

      </tbody>
    </Table>
  );
};

const TableRow = (userObj) => {
  const { index, user } = userObj;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.company}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.city}</td>
      <td>{user.province}</td>
      <td>{user.postalCode}</td>
      <td>{user.type}</td>
      <td><button className="btn btn-danger">Delete</button></td>
    </tr>
  );
};
export default Admin;