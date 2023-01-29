import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

import { GoPencil } from 'react-icons/go';
import { BsTrash } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';

import { useState, useEffect } from "react";

import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const UsersPageComponent = ({ fetchUsers, deleteUser }) => {
  const [users, setUsers] = useState([]);
  const [userDeleted, setUserDeleted] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = async (userId) => {
    if (window.confirm("Are you sure?")) {
        const data  = await deleteUser(userId);
        if(data === 'user removed') {
            setUserDeleted(!userDeleted)
        }
    }
  };

  useEffect(() => {
    const abctrl = new AbortController();
    fetchUsers(abctrl)
      .then((res) => setUsers(res))
      .catch((er) =>
      dispatch(logout())
        // console.log(
        //   er.response.data.message ? er.response.data.message : er.response.data
        // )
      );
      return () => abctrl.abort();
  }, [userDeleted, dispatch, fetchUsers]);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>User List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                        <td className="text-center">
                            {user.isAdmin ? <BsCheckLg className="text-success" /> : <BsXLg className="text-danger" />}
                        </td>
                        <td>
                            <LinkContainer to={`/admin/edit-user/${user._id}`}>
                                <Button className="btn-sm" variant="outline-primary">
                                    <GoPencil />
                                </Button>
                            </LinkContainer>
                            {" / "}
                            <Button
                                variant="outline-danger"
                                className="btn-sm"
                                onClick={() => deleteHandler(user._id)}
                            >
                                <BsTrash />
                            </Button>
                        </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UsersPageComponent;
