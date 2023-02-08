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
    (function () {
        'use strict';

        var TableFilter = (function () {
            var Arr = Array.prototype;
            var input;

            function onInputEvent(e) {
                input = e.target;
                var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
                Arr.forEach.call(table1, function (table) {
                    Arr.forEach.call(table.tBodies, function (tbody) {
                        Arr.forEach.call(tbody.rows, filter);
                    });
                });
            }

            function filter(row) {
                var text = row.textContent.toLowerCase();
                //console.log(text);
                var val = input.value.toLowerCase();
                //console.log(val);
                row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
            }

            return {
                init: function () {
                    var inputs = document.getElementsByClassName('table-filter');
                    Arr.forEach.call(inputs, function (input) {
                        input.oninput = onInputEvent;
                    });
                }
            };

        })();

        TableFilter.init();
    })();
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
          <Col md={10}>
              <Row className="mb-3">
                <Col>
                      <h1>User List</h1>
                  </Col>
                  <Col md={3}>
                      <input type="text" className="mt-2 input-group table-filter w-100" data-table="order-table" placeholder="Search Users.." />
                  </Col>
              </Row>
              <Table striped bordered hover responsive className="order-table table">
          <thead>
            <tr>
                          <th className="text-center">#</th>
                          <th className="text-center">First Name</th>
                          <th className="text-center">Last Name</th>
                          <th className="text-center">Email</th>
                          <th className="text-center">Is Admin</th>
                          <th className="text-center">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user, idx) => (
                <tr key={idx}>
                        <td className="text-center">{idx + 1}</td>
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
