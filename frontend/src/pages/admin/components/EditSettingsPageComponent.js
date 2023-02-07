import { Row, Col, Container, Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const EditPageSettingsmponent = ({ updateSettingsApiRequest, fetchSetting }) => {
    const [validated, setValidated] = useState(false);
    const [setting, setSetting] = useState([]);
    const [updateSettingsResponseState, setUpdateSettingsResponseState] = useState({ message: "", error: "" });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchSetting(id)
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [id, fetchSetting]);
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const tax = form.tax.value;
        const shipping = form.shipping.value;
        const monHoursOp = form.monHoursOp.value;
        const monHoursCl = form.monHoursCl.value;
        const tusHoursOp = form.tusHoursOp.value;
        const tusHoursCl = form.tusHoursCl.value;
        const wedHoursOp = form.wedHoursOp.value;
        const wedHoursCl = form.wedHoursCl.value;
        const thuHoursOp = form.thuHoursOp.value;
        const thuHoursCl = form.thuHoursCl.value;
        const friHoursOp = form.friHoursOp.value;
        const friHoursCl = form.friHoursCl.value;
        const satHoursOp = form.satHoursOp.value;
        const satHoursCl = form.satHoursCl.value;
        const sunHoursOp = form.sunHoursOp.value;
        const sunHoursCl = form.sunHoursCl.value;
        const monHoursOpServ = form.monHoursOpServ.value;
        const monHoursClServ = form.monHoursClServ.value;
        const tusHoursOpServ = form.tusHoursOpServ.value;
        const tusHoursClServ = form.tusHoursClServ.value;
        const wedHoursOpServ = form.wedHoursOpServ.value;
        const wedHoursClServ = form.wedHoursClServ.value;
        const thuHoursOpServ = form.thuHoursOpServ.value;
        const thuHoursClServ = form.thuHoursClServ.value;
        const friHoursOpServ = form.friHoursOpServ.value;
        const friHoursClServ = form.friHoursClServ.value;
        const satHoursOpServ = form.satHoursOpServ.value;
        const satHoursClServ = form.satHoursClServ.value;
        const sunHoursOpServ = form.sunHoursOpServ.value;
        const sunHoursClServ = form.sunHoursClServ.value;
        const seoHelmentName = form.seoHelmentName.value;
        const seoHelmentTitle = form.seoHelmentTitle.value;
        const seoHelmentDescription = form.seoHelmentDescription.value;
        const seoHelmentType = form.seoHelmentType.value;
        const seoHelmentTitleProduct = form.seoHelmentTitleProduct.value;
        const seoHelmentDescriptionProduct = form.seoHelmentDescriptionProduct.value;
        const seoHelmentTypeProduct = form.seoHelmentTypeProduct.value;
        const seoHelmentTitleGallery = form.seoHelmentTitleGallery.value;
        const seoHelmentDescriptionGallery = form.seoHelmentDescriptionGallery.value;
        const seoHelmentTypeGallery = form.seoHelmentTypeGallery.value;
        const seoHelmentTitleLogin = form.seoHelmentTitleLogin.value;
        const seoHelmentDescriptionLogin = form.seoHelmentDescriptionLogin.value;
        const seoHelmentTypeLogin = form.seoHelmentTypeLogin.value;
        const seoHelmentTitleRegister = form.seoHelmentTitleRegister.value;
        const seoHelmentDescriptionRegister = form.seoHelmentDescriptionRegister.value;
        const seoHelmentTypeRegister = form.seoHelmentTypeRegister.value;
        const seoHelmentTitleCart = form.seoHelmentTitleCart.value;
        const seoHelmentDescriptionCart = form.seoHelmentDescriptionCart.value;
        const seoHelmentTypeCart = form.seoHelmentTypeCart.value;
        const seoHelmentTitleFound = form.seoHelmentTitleFound.value;
        const seoHelmentDescriptionFound = form.seoHelmentDescriptionFound.value;
        const seoHelmentTypeFound = form.seoHelmentTypeFound.value;
        const seoHelmentTitleUserProfile = form.seoHelmentTitleUserProfile.value;
        const seoHelmentDescriptionUserProfile = form.seoHelmentDescriptionUserProfile.value;
        const seoHelmentTypeUserProfile = form.seoHelmentTypeUserProfile.value;
        const seoHelmentTitleUserOrders = form.seoHelmentTitleUserOrders.value;
        const seoHelmentDescriptionUserOrders = form.seoHelmentDescriptionUserOrders.value;
        const seoHelmentTypeUserOrders = form.seoHelmentTypeUserOrders.value;
        const seoHelmentTitleUserOrdersDetail = form.seoHelmentTitleUserOrdersDetail.value;
        const seoHelmentDescriptionUserOrdersDetail = form.seoHelmentDescriptionUserOrdersDetail.value;
        const seoHelmentTypeUserOrdersDetail = form.seoHelmentTypeUserOrdersDetail.value;
        const seoHelmentTitleUserCartDetail = form.seoHelmentTitleUserCartDetail.value;
        const seoHelmentDescriptionUserCartDetail = form.seoHelmentDescriptionUserCartDetail.value;
        const seoHelmentTypeUserCartDetail = form.seoHelmentTypeUserCartDetail.value;
        const seoHelmentTitleAbout = form.seoHelmentTitleAbout.value;
        const seoHelmentDescriptionAbout = form.seoHelmentDescriptionAbout.value;
        const seoHelmentTypeAbout = form.seoHelmentTypeAbout.value;
        const seoHelmentTitleStaff = form.seoHelmentTitleStaff.value;
        const seoHelmentDescriptionStaff = form.seoHelmentDescriptionStaff.value;
        const seoHelmentTypeStaff = form.seoHelmentTypeStaff.value;
        const seoHelmentTitleContact = form.seoHelmentTitleContact.value;
        const seoHelmentDescriptionContact = form.seoHelmentDescriptionContact.value;
        const seoHelmentTypeContact = form.seoHelmentTypeContact.value;

        if (event.currentTarget.checkValidity() === true) {
            updateSettingsApiRequest(
                id,
                tax,
                shipping,
                monHoursOp,
                monHoursCl,
                tusHoursOp,
                tusHoursCl,
                wedHoursOp,
                wedHoursCl,
                thuHoursOp,
                thuHoursCl,
                friHoursOp,
                friHoursCl,
                satHoursOp,
                satHoursCl,
                sunHoursOp,
                sunHoursCl,
                monHoursOpServ,
                monHoursClServ,
                tusHoursOpServ,
                tusHoursClServ,
                wedHoursOpServ,
                wedHoursClServ,
                thuHoursOpServ,
                thuHoursClServ,
                friHoursOpServ,
                friHoursClServ,
                satHoursOpServ,
                satHoursClServ,
                sunHoursOpServ,
                sunHoursClServ,
                seoHelmentName,
                seoHelmentTitle,
                seoHelmentDescription,
                seoHelmentType,
                seoHelmentTitleProduct,
                seoHelmentDescriptionProduct,
                seoHelmentTypeProduct,
                seoHelmentTitleGallery,
                seoHelmentDescriptionGallery,
                seoHelmentTypeGallery,
                seoHelmentTitleLogin,
                seoHelmentDescriptionLogin,
                seoHelmentTypeLogin,
                seoHelmentTitleRegister,
                seoHelmentDescriptionRegister,
                seoHelmentTypeRegister,
                seoHelmentTitleCart,
                seoHelmentDescriptionCart,
                seoHelmentTypeCart,
                seoHelmentTitleFound,
                seoHelmentDescriptionFound,
                seoHelmentTypeFound,
                seoHelmentTitleUserProfile,
                seoHelmentDescriptionUserProfile,
                seoHelmentTypeUserProfile,
                seoHelmentTitleUserOrders,
                seoHelmentDescriptionUserOrders,
                seoHelmentTypeUserOrders,
                seoHelmentTitleUserOrdersDetail,
                seoHelmentDescriptionUserOrdersDetail,
                seoHelmentTypeUserOrdersDetail,
                seoHelmentTitleUserCartDetail,
                seoHelmentDescriptionUserCartDetail,
                seoHelmentTypeUserCartDetail,
                seoHelmentTitleAbout,
                seoHelmentDescriptionAbout,
                seoHelmentTypeAbout,
                seoHelmentTitleStaff,
                seoHelmentDescriptionStaff,
                seoHelmentTypeStaff,
                seoHelmentTitleContact,
                seoHelmentDescriptionContact,
                seoHelmentTypeContact,
                
            )
                .then(data => {
                   
                        navigate("/admin/products");
                    
                })
                .catch(er => {
                    setUpdateSettingsResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data });
                })
        }

        setValidated(true);
    };
  

    return (
        <Container fluid className="mb-5 pb-5 mt-5">
            
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    
                    <Col className="ms-5 me-5" md={2}>
                        <AdminLinksComponent />
                    </Col>
                    <Col md={4}>
                            <h1 className="mb-5">Edit Settings</h1>
                        <h5>Seo Settings</h5>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentName">
                            <Form.Label>Business Name:</Form.Label>
                            <Form.Control
                                name="seoHelmentName"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitle">
                            <Form.Label>Homepage Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitle"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitle}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescription">
                            <Form.Label>Homepage Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescription"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescription}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentType">
                            <Form.Label>Homepage type:</Form.Label>
                            <Form.Control
                                name="seoHelmentType"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentType}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleProduct">
                            <Form.Label>Product List Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleProduct"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleProduct}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionProduct">
                            <Form.Label>Product List Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionProduct"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionProduct}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeProduct">
                            <Form.Label>Product-List Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeProduct"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeProduct}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleGallery">
                            <Form.Label>Custom-Build Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleGallery"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleGallery}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionGallery">
                            <Form.Label>Custom-Build Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionGallery"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionGallery}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeGallery">
                            <Form.Label>Custom-Build Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeGallery"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeGallery}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleLogin">
                            <Form.Label>Login-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleLogin"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleLogin}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionLogin">
                            <Form.Label>Login-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionLogin"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionLogin}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeLogin">
                            <Form.Label>Login-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeLogin"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeLogin}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleRegister">
                            <Form.Label>Register-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleRegister"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleRegister}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionRegister">
                            <Form.Label>Register-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionRegister"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionRegister}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeRegister">
                            <Form.Label>Register-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeRegister"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeRegister}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleCart">
                            <Form.Label>Cart-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleCart"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleCart}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionCart">
                            <Form.Label>Cart-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionCart"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionCart}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeCart">
                            <Form.Label>Cart-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeCart"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeCart}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleFound">
                            <Form.Label>404-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleFound"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleFound}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionFound">
                            <Form.Label>404-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionFound"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionFound}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeFound">
                            <Form.Label>404-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeFound"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeFound}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleUserProfile">
                            <Form.Label>User-Profile-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleUserProfile"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleUserProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionUserProfile">
                            <Form.Label>User-Profile-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionUserProfile"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionUserProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeUserProfile">
                            <Form.Label>User-Profile-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeUserProfile"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeUserProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleUserOrders">
                            <Form.Label>User-Orders-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleUserOrders"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleUserOrders}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionUserOrders">
                            <Form.Label>User-Orders-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionUserOrders"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionUserOrders}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeUserOrders">
                            <Form.Label>User-Orders-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeUserOrders"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeUserOrders}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleUserOrdersDetail">
                            <Form.Label>User-Orders-Detail-page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleUserOrdersDetail"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleUserOrdersDetail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionUserOrdersDetail">
                            <Form.Label>User-Orders-Detail-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionUserOrdersDetail"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionUserOrdersDetail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeUserOrdersDetail">
                            <Form.Label>User-Orders-Detail-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeUserOrdersDetail"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeUserOrdersDetail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleUserCartDetail">
                            <Form.Label>User-Cart-Detail-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleUserCartDetail"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleUserCartDetail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionUserCartDetail">
                            <Form.Label>User-Cart-Detail-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionUserCartDetail"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionUserCartDetail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeUserCartDetail">
                            <Form.Label>User-Cart-Detail-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeUserCartDetail"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeUserCartDetail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleAbout">
                            <Form.Label>About-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleAbout"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleAbout}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionAbout">
                            <Form.Label>About-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionAbout"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionAbout}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeAbout">
                            <Form.Label>About-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeAbout"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeAbout}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleStaff">
                            <Form.Label>Staff-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleStaff"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleStaff}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionStaff">
                            <Form.Label>Staff-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionStaff"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionStaff}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeStaff">
                            <Form.Label>Staff-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeStaff"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeStaff}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTitleContact">
                            <Form.Label>Contact-Page Title:</Form.Label>
                            <Form.Control
                                name="seoHelmentTitleContact"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTitleContact}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentDescriptionContact">
                            <Form.Label>Contact-page Description:</Form.Label>
                            <Form.Control
                                name="seoHelmentDescriptionContact"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentDescriptionContact}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSeoHelmentTypeContact">
                            <Form.Label>Contact-Page type:</Form.Label>
                            <Form.Control
                                name="seoHelmentTypeContact"
                                required
                                type="text"
                                defaultValue={setting.seoHelmentTypeContact}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="mt-5 pt-5" md={4}>
                        <Form.Group className="mb-3" controlId="formBasicTax">
                            <Form.Label>Tax:</Form.Label>
                            <Form.Control
                                name="tax"
                                required
                                type="text"
                                defaultValue={setting.tax}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicShipping">
                            <Form.Label>Shipping:</Form.Label>
                            <Form.Control
                                name="shipping"
                                required
                                type="number"
                                defaultValue={setting.shipping}
                            />
                        </Form.Group>
                        <h4>Dr. Jeep Hours</h4>
                        <Table size="sm">

                            <tbody className="opening-hours">
                                <tr>
                                    <td>Monday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicMonOpHours">
                                            <Form.Control
                                                name="monHoursOp"
                                                required
                                                type="text"
                                                defaultValue={setting.monHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicMonClHours">
                                            <Form.Control
                                                name="monHoursCl"
                                                required
                                                type="text"
                                                defaultValue={setting.monHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicTusOpHours">
                                            <Form.Control
                                                name="tusHoursOp"
                                                required
                                                type="text"
                                                defaultValue={setting.tusHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicTusClHours">
                                            <Form.Control
                                                name="tusHoursCl"
                                                required
                                                type="text"
                                                defaultValue={setting.tusHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicWedOpHours">
                                            <Form.Control
                                                name="wedHoursOp"
                                                required
                                                type="text"
                                                defaultValue={setting.wedHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicWedClHours">
                                            <Form.Control
                                                name="wedHoursCl"
                                                required
                                                type="text"
                                                defaultValue={setting.wedHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicThuOpHours">
                                            <Form.Control
                                                name="thuHoursOp"
                                                required
                                                type="text"
                                                defaultValue={setting.thuHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicThuClHours">
                                            <Form.Control
                                                name="thuHoursCl"
                                                required
                                                type="text"
                                                defaultValue={setting.thuHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicFriOpHours">
                                            <Form.Control
                                                name="friHoursOp"
                                                required
                                                type="text"
                                                defaultValue={setting.friHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicFriClHours">
                                            <Form.Control
                                                name="friHoursCl"
                                                required
                                                type="text"
                                                defaultValue={setting.friHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSatOpHours">
                                            <Form.Control
                                                name="satHoursOp"
                                                required
                                                type="text"
                                                defaultValue={setting.satHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSatClHours">
                                            <Form.Control
                                                name="satHoursCl"
                                                type="text"
                                                defaultValue={setting.satHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSunOpHours">
                                            <Form.Control
                                                name="sunHoursOp"
                                                
                                                type="text"
                                                defaultValue={setting.sunHoursOp}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSunClHours">
                                            <Form.Control
                                                name="sunHoursCl"
                                                
                                                type="text"
                                                defaultValue={setting.sunHoursCl}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h4>Dr. Jeep Service Hours</h4>
                        <Table size="sm">

                            <tbody className="opening-hours">
                                <tr>
                                    <td>Monday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicMonOpHoursServ">
                                            <Form.Control
                                                name="monHoursOpServ"
                                                required
                                                type="text"
                                                defaultValue={setting.monHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicMonClHoursServ">
                                            <Form.Control
                                                name="monHoursClServ"
                                                required
                                                type="text"
                                                defaultValue={setting.monHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicTusOpHoursServ">
                                            <Form.Control
                                                name="tusHoursOpServ"
                                                required
                                                type="text"
                                                defaultValue={setting.tusHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicTusClHoursServ">
                                            <Form.Control
                                                name="tusHoursClServ"
                                                required
                                                type="text"
                                                defaultValue={setting.tusHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicWedOpHoursServ">
                                            <Form.Control
                                                name="wedHoursOpServ"
                                                required
                                                type="text"
                                                defaultValue={setting.wedHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicWedClHoursServ">
                                            <Form.Control
                                                name="wedHoursClServ"
                                                required
                                                type="text"
                                                defaultValue={setting.wedHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicThuOpHoursServ">
                                            <Form.Control
                                                name="thuHoursOpServ"
                                                required
                                                type="text"
                                                defaultValue={setting.thuHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicThuClHoursServ">
                                            <Form.Control
                                                name="thuHoursClServ"
                                                required
                                                type="text"
                                                defaultValue={setting.thuHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicFriOpHoursServ">
                                            <Form.Control
                                                name="friHoursOpServ"
                                                required
                                                type="text"
                                                defaultValue={setting.friHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicFriClHoursServ">
                                            <Form.Control
                                                name="friHoursClServ"
                                                required
                                                type="text"
                                                defaultValue={setting.friHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSatOpHoursServ">
                                            <Form.Control
                                                name="satHoursOpServ"

                                                type="text"
                                                defaultValue={setting.satHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSatClHoursServ">
                                            <Form.Control
                                                name="satHoursClServ"

                                                type="text"
                                                defaultValue={setting.satHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td></td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSunOpHoursServ">
                                            <Form.Control
                                                name="sunHoursOpServ"

                                                type="text"
                                                defaultValue={setting.sunHoursOpServ}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td>-</td>
                                    <td>
                                        <Form.Group className="mb-2" controlId="formBasicSunClHoursServ">
                                            <Form.Control
                                                name="sunHoursClServ"

                                                type="text"
                                                defaultValue={setting.sunHoursClServ}
                                            />
                                        </Form.Group>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                        </Row>
                        <div className="text-center">
                            <Button variant="outline-primary" type="submit">
                                UPDATE
                            </Button>
                        </div>
                        {updateSettingsResponseState.error ?? ""}
                    </Form>
        </Container>
    );
};

export default EditPageSettingsmponent;
