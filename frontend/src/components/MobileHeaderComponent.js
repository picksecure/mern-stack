import paths from '../router/paths';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaSearch } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";
import { setChatRooms, setSocket, setMessageReceived, removeChatRoom } from "../redux/actions/chatActions";
import { FaShoppingCart } from 'react-icons/fa';

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

    const myFunction = (e) => {
        document.getElementById("navbarToggleExternalContent").classList.toggle("show");
    }
    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <>
            <nav className="row navbar navbar-light bg-light pt-3 pb-3">
                <div className="ms-5 col container-fluid ">
                    <button className="navbar-toggler border-light dropbtn" type="button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars/>
                    </button>
                </div>
                <div className="col container-fluid">
                    <button className="navbar-toggler border-light dropbtn" type="button" data-bs-toggle="collapse" data-bs-target="#mobileContent" aria-controls="mobileContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaSearch/>
                    </button>
                </div>
                <div className="col container-fluid">
                    <button className="navbar-toggler border-light dropbtn" type="button" data-bs-toggle="collapse" data-bs-target="#mobileContent1" aria-controls="mobileContent1" aria-expanded="false" aria-label="Toggle navigation">
                        <MdLocationPin />
                    </button>
                </div>
                <div className="col container-fluid">
                    <button className="navbar-toggler border-light dropbtn" type="button" data-bs-toggle="collapse" data-bs-target="#mobileContent2" aria-controls="mobileContent2" aria-expanded="false" aria-label="Toggle navigation">
                        <BsFillTelephoneFill />
                    </button>
                </div>
            </nav>
            <div className="collapse navbar-collapse bg-light dropdown-content" id="navbarToggleExternalContent">
                <ul className="p-4 navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={paths.ROOT}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={paths.ABOUT}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={paths.CONTACT}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={paths.PRODUCTLIST}>
                            Shop
                        </Link>
                    </li>
                    {userInfo.isAdmin ? (
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" to={paths.ADMINORDERS}>
                                    Admin
                                    {messageReceived && <span className="position-absolute top-3 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>}
                                </Link>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {userInfo.name}
                                </a>
                                <div className="dropdown-menu ps-3" aria-labelledby="#navbarDropdown">
                                    <Link className="nav-link" to={paths.USERPROFILE}><li>My Profile</li></Link>
                                    <Link className="nav-link" onClick={() => dispatch(logout())}>Logout</Link>
                                </div>
                            </li>
                        </>
                    ) : userInfo.name && !userInfo.isAdmin ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {userInfo.name}
                                </a>
                                <div className="dropdown-menu ps-3" aria-labelledby="#navbarDropdown">
                                    <Link className="nav-link" to={paths.USERORDER}><li eventKey={paths.USERORDER}>My Orders</li></Link>
                                    <Link className="nav-link" to={paths.USERPROFILE}><li eventKey={paths.USERPROFILE}>My Profile</li></Link>
                                    <Link className="nav-link" onClick={() => dispatch(logout())}>Logout</Link>
                                </div>
                            </li>
                           
                    ) : (
                                <>
                                    <li className="nav-item">
                                    <Link className="nav-link" to={paths.LOGIN}>
                                        Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to={paths.REGISTER}>
                                Register
                                        </Link>
                                    </li>
                        </>
                    )}
                    <li className="nav-item">
                    <Link className="nav-link" to={paths.CART}>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-1 me-1">
                                {itemsCount === 0 ? "" : itemsCount}
                            </span>
                            <FaShoppingCart />
                        </Link>
                        </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse1 bg-light dropdown-content" id="mobileContent">
                <ul className="p-4 navbar-nav">
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
                </ul>
            </div>
            <div className="collapse navbar-collapse2 bg-light dropdown-content" id="mobileContent1">
                <ul className="p-2 navbar-nav">
                    <li className="nav-item nav-link font-bold me-auto">
                        Directions
                    </li>
                    <li className="nav-item nav-link me-auto ms-2 mt-0 pt-0">
                        130 N Main St Salem, Ut 84653
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse2 bg-light dropdown-content" id="mobileContent2">
                <ul className="p-2 navbar-nav">
                    <li className="nav-item nav-link font-bold me-auto">
                        Contact Us
                    </li>
                    <li className="nav-item nav-link me-auto ms-2 mt-0 pt-0">
                        Sales: (801) 500-0594
                    </li>
                    <li className="nav-item nav-link me-auto ms-2 mt-0 pt-0">
                        Service: (801) 310-8245
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MobileHeaderComponent;