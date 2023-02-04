import { Row, Col, Container, Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
        <Container className="mb-5 pb-5">
            <Row className="mt-5 mb-3">
                <Col>
                    <Link to="/admin/products" className="btn btn-outline-primary my-3">
                        Go Back
                    </Link>
                </Col>
                <Col className="text-center">
                    <h1>Edit Settings</h1>
                </Col>
                <Col></Col>
            </Row>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col>
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
                        
                    </Col>
                    <Col>
                        
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
