import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login", {
        email: email,
        password: password
      }
      );
      setUser(res);
    //   console.log(res);
    } catch (error) {
      setUser(null);
      setError(error?.response?.data);
      // console.log(error);
    }
  };

//   console.log(user);

  return (
    <div className="containerz mb-3" style={{ display: 'flex', margin: 'auto auto', flexDirection: 'column', alignItems:"center", gap: '20px' }}>
      <Form style={{ width: '50%' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Form>
      Status Code:<span style={{display: 'inline-block'}}>{user?.status}</span>
      <Table striped bordered hover variant="dark" style={{ width: '50%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>gender</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.data?.fullname}</td>
            <td>{user?.data?.email}</td>
            <td>{user?.data?.gender}</td>
            <td>{user?.data?.phone}</td>
          </tr>
        </tbody>
      </Table>
      <h3 style={{ color: 'black' }}>{user ? '' : error}</h3>
    </div>
  );
};

export default Login;
