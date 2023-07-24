import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            Authentication boilerplate with JWT token and Redux toolkit.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="dark" className="me-3">
                Sign In
              </Button>
            </LinkContainer>

            <LinkContainer to="/register">
              <Button variant="secondary">Register</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
