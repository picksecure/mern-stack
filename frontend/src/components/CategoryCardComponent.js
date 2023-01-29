import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  
    return (
        <Card className="categoryCard">
      <Card.Img crossOrigin="anonymous" className="categoryImage" variant="top" src={category.image ?? null} />
      <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>
                  {category.description}
              </Card.Text>
              <div className="text-center">
                  <LinkContainer to={`/product-list/category/${category.name}`} className="text-center">
                      <Button variant="outline-primary">Shop {category.name}</Button>
                  </LinkContainer>
              </div>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
