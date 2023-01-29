import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import paths from "../router/paths";

const AddedToCartMessageComponent = ({ showCartMessage, setShowCartMessage }) => {
  const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

  return (
      <Alert
          className="mt-5"
      show={showCartMessage}
      variant="light"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
          <Alert.Heading>The product was added to your cart!</Alert.Heading>
          <p className="ms-5 mt-1">
              <Button variant="outline-success" onClick={goBack}>Go back</Button>{" "}
              <Link to={paths.CART} >
          <Button variant="outline-primary">Go to cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
