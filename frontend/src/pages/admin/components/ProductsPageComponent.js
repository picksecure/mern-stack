import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { GoPencil } from 'react-icons/go';
import { BsTrash } from 'react-icons/bs';
import paths from '../../../router/paths';
import Barcode from 'react-barcode';
import PrintComponents from 'react-print-components';

import { useState, useEffect } from "react";

const ProductsPageComponent = ({ fetchProducts, deleteProduct }) => {
    const [products, setProducts] = useState([]);
   const [productDeleted, setProductDeleted] = useState(false); 

  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure?")) {
        const data = await deleteProduct(productId)
        if (data.message === "product removed") {
            setProductDeleted(!productDeleted);
        }
    }
  };
  
  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl)
      .then((res) => setProducts(res))
      .catch((er) =>
         setProducts([
           {name: er.response.data.message ? er.response.data.message : er.response.data}
         ]),
      );
    return () => abctrl.abort();
  }, [productDeleted, fetchProducts]);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
              <Row className="mb-3">
                  <Col xs={5}>
                      <h1>
                          Product List
                      </h1>
                  </Col>
                  <Col></Col>
                  <Col>
                      <LinkContainer className="ms-5" to={paths.ADMINCREATEPRODUCT} >
                          <Button variant="outline-primary" size="lg">
                              Create new
                          </Button>
                      </LinkContainer>
                      <LinkContainer className="ms-5" to="/admin/settings/63c9003882210e53d2640862" >
                          <Button variant="outline-primary" size="lg">
                             Edit Settings
                          </Button>
                      </LinkContainer>
                  </Col>
              </Row>
        <Table striped bordered hover responsive>
                  <thead>
                      <tr className="text-center">
              <th>#</th>
              <th>Product Name</th>
                          <th>Price</th>
                          <th>Location</th>
                          <th>Barcode</th>
                          <th>Print Barcode</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
                <tr key={idx}>
                    <td className="text-center">{idx + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">{item.location}</td>
                    <td className="text-center">
                        {item.barcode}
                    </td>
                    <td className="text-center">
                        <PrintComponents
                        trigger={<button type="button" className="btn btn-outline-primary">Print</button>}
                    >
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4">
                                </div>
                                <Barcode value={item.barcode} format='CODE128' width={2} height={45} fontSize="15"/>
                        </div>
                        </PrintComponents>
                    </td>
                    <td className="text-center">{item.category}</td>
                    <td className="text-center">
                        <LinkContainer to={`/admin/edit-product/${item._id}`}>
                            <Button className="btn-sm" variant="outline-primary">
                                <GoPencil />
                            </Button>
                        </LinkContainer>
                        {" / "}
                        <Button
                            variant="outline-danger"
                            className="btn-sm"
                            onClick={() => deleteHandler(item._id)}
                        >
                            <BsTrash />
                        </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProductsPageComponent;
