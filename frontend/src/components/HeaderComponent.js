import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import paths from '../router/paths';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";
import { setChatRooms, setSocket, setMessageReceived, removeChatRoom } from "../redux/actions/chatActions";

function HeaderComponent() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userRegisterLogin);
    const itemsCount = useSelector((state) => state.cart.itemsCount);
    const { categories } = useSelector((state) => state.getCategories);
    const [searchCategoryToggle, setSearchCategoryToggle] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const { messageReceived } = useSelector((state) => state.adminChat);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const submitHandler = (e) => {
        if (e.keyCode && e.keyCode !== 13) return;
        e.preventDefault();
        if (searchQuery.trim()) {
            if (searchCategoryToggle === "All") {
                navigate(`/product-list/search/${searchQuery}`);
            } else {
                navigate(`/product-list/category/${searchCategoryToggle.replaceAll("/", ",")}/search/${searchQuery}`);
            }
        } else if (searchCategoryToggle !== "All") {
            navigate(`/product-list/category/${searchCategoryToggle.replaceAll("/", ",")}`);
        } else {
            navigate("/product-list");
        }
    }
    
    useEffect(() => {
        if (userInfo.isAdmin) {
            var audio = new Audio("/audio/chat-msg.mp3");
            const socket = socketIOClient();
            socket.emit("admin connected with server", "Admin" + Math.floor(Math.random() * 1000000000000));
            socket.on("server sends message from client to admin", ({ user, message }) => {
                dispatch(setSocket(socket));
                //   let chatRooms = {
                //     fddf54gfgfSocketID: [{ "client": "dsfdf" }, { "client": "dsfdf" }, { "admin": "dsfdf" }],
                //   };
                dispatch(setChatRooms(user, message));
                dispatch(setMessageReceived(true));
                audio.play();
            })
            socket.on("disconnected", ({ reason, socketId }) => {
                //   console.log(socketId, reason)
                dispatch(removeChatRoom(socketId));
            })
            return () => socket.disconnect();
        }
    }, [userInfo.isAdmin, dispatch])

    return (
        <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <LinkContainer to={paths.ROOT}>
                        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
                        <nav className="ms-auto">
                            <InputGroup>
                                <DropdownButton id="dropdown-basic-button" title={searchCategoryToggle}>
                                    <Dropdown.Item onClick={() => setSearchCategoryToggle("All")}>All</Dropdown.Item>
                                    {categories.map((category, id) => (
                                        <Dropdown.Item key={id} onClick={() => setSearchCategoryToggle(category.name)}>{category.name}</Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <Form.Control onKeyUp={submitHandler} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search in shop ..." className="me-1" />
                                <Button onClick={submitHandler} variant="outline-primary"><FaSearch /></Button>
                            </InputGroup>
                        </nav>
                        <Nav className="ms-auto">
                            <LinkContainer to={paths.PRODUCTLIST}>
                                <Nav.Link>Shop</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={paths.ABOUT}>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                            {userInfo.isAdmin ? (
                                <>
                                    <LinkContainer to={paths.ADMINORDERS}>
                                        <Nav.Link>
                                            Admin
                                            {messageReceived && <span className="position-absolute top-3 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>}
                                        </Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown title={`${userInfo.name}`} id="basic-nav-dropdown">
                                        <LinkContainer to={paths.USERPROFILE}><NavDropdown.Item eventKey={paths.USERPROFILE}>My Profile</NavDropdown.Item></LinkContainer>
                                        <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : userInfo.name && !userInfo.isAdmin ? (
                                <NavDropdown title={`${userInfo.name} ${userInfo.lastName}`} id="basic-nav-dropdown">
                                    <LinkContainer to={paths.USERORDER}><NavDropdown.Item eventKey={paths.USERORDER}>My Orders</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to={paths.USERPROFILE}><NavDropdown.Item eventKey={paths.USERPROFILE}>My Profile</NavDropdown.Item></LinkContainer>
                                    <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    <LinkContainer to={paths.LOGIN}>
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to={paths.REGISTER}>
                                        <Nav.Link href={paths.REGISTER} >Register</Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                            <LinkContainer to={paths.CART}>
                                <Nav.Link href={paths.CART} className=" position-relative">
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-1 me-1">
                                        {itemsCount === 0 ? "" : itemsCount}
                                    </span>
                                    <FaShoppingCart />
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default HeaderComponent;