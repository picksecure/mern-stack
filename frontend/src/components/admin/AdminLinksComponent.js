import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { logout } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import paths from "../../router/paths";

const AdminLinksComponent = () => {
    const dispatch = useDispatch()
  return (
    <Navbar bg="light" variant="light">
          <Nav className="flex-column">
              <LinkContainer to={paths.ADMINORDERS}>
          <Nav.Link>Orders</Nav.Link>
              </LinkContainer>
              <LinkContainer to={paths.ADMINPRODUCTS}>
          <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to={paths.ADMINUSERS}>
          <Nav.Link>Users</Nav.Link>
              </LinkContainer>
              <LinkContainer to={paths.ADMINCHATS}>
          <Nav.Link>Chats</Nav.Link>
              </LinkContainer>
              <LinkContainer to={paths.ADMINMESSAGE}>
                  <Nav.Link>Messages</Nav.Link>
              </LinkContainer>
              <LinkContainer to={paths.ADMINANALYTICS}>
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;
