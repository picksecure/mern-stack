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
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";
import { setChatRooms, setSocket, setMessageReceived, removeChatRoom } from "../redux/actions/chatActions";
import { FaShoppingCart } from 'react-icons/fa';
import $ from 'jquery';

function MobileHeaderComponent() {
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
        <>
            <nav className="row ps-4 navbar navbar-expand-lg navbar-light fixed-top bg-light" id="collapse">
                <div className="col">
                        <button className="navbar-toggler border-light" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
                        <LinkContainer to={paths.ROOT}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={paths.PRODUCTLIST}>
                            <Nav.Link>Shop</Nav.Link>
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
                    </div>
                </div>
                <div className="col">
                        <button className="navbar-toggler border-light" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <FaSearch />
                        </button>
                        <div className="collapse navbar-collapse1 bg-light" id="navbarCollapse1">
                            <div className="navbar-nav">
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
                    </div>
                        </div>
                </div>
                <div className="col">
                    <div className="text-center">
                        <button className="navbar-toggler border-light" type="button" data-toggle="collapse" data-target="#navbarCollapse2" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <MdLocationPin />
                        </button>
                        <div className="row collapse navbar-collapse2 bg-light" id="navbarCollapse2">
                            <div className="col navbar-nav">
                                <Nav.Link className="font-bold me-auto">Directions</Nav.Link>
                                <Nav.Link className="me-auto ms-2 mt-0 pt-0">130 N Main St Salem, Ut 84653</Nav.Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="col pe-4">
                    <div className="text-center">
                        <button className="navbar-toggler border-light" type="button" data-toggle="collapse" data-target="#navbarCollapse3" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <BsFillTelephoneFill />
                        </button>
                        <div className="row collapse navbar-collapse2 bg-light" id="navbarCollapse3">
                            <div className="col-6 navbar-nav">
                                <Nav.Link className="font-bold me-auto">Contact Us</Nav.Link>
                                <p>Sales: (801) 500-0594</p>
                                <p className="ps-2">Service: (801) 310-8245</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
   
        </>
    );
}

export default MobileHeaderComponent;