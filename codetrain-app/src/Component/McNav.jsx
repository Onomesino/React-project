import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Mc from "./Mc.css";

function mcNav() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./Logo.jpeg" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav" className="Navv">
            <Nav className="me-auto">
              <NavDropdown title="language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="menn">
                Sign Up for Email
              </Nav.Link>

              <Nav.Link href="#link" className="menn">
                Careers
              </Nav.Link>

              <Navbar.Brand href="#search">
                <img src="./Search.png" alt="" className="SSS" />
              </Navbar.Brand>
              <Nav.Link href="#home" className="me">
                Search
              </Nav.Link>
              <Navbar.Brand href="#location">
                <img src="./Location.jpeg" alt="" className="LLL" />
              </Navbar.Brand>

              <a
                href="https://www.google.com/maps/place/Codetrain/@5.6439971,
                -0.1565604,17z/data=!3m1!4b1!4m5!3m4!1s0xfdf9b269a8fbdd1:0x1b
                b79c84b5c0e1f2!8m2!3d5.6439971!4d-0.1543717"
                className="ink"
              >
                Change Your Location
              </a>
              <Button variant="warning" className="Butt">
                Order Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="Navv">
            <Nav className="me-auto">
              <NavDropdown
                className="menu"
                title="Our Menu"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="men">
                Download App
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                MyMcDonald's Rewards
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Exclusive Deals
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                About Our Food
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Locate
              </Nav.Link>
              <Nav.Link href="#link" className="men">
                Gift Cards
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger1.jpeg" alt="" className="Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="print">
                Straight to the Points:
                <br />
                McDelivery®in the
                <br />
                App
              </h2>
              <p>
                The McDonald’s app is now the only place you’ll earn
                <br />
                MyMcDonald’s Rewards points on every McDelivery
                <br />
                order. Plus, you can get those free McDonald’s rewards
                <br />
                you earn delivered, too. Just order, relax and enjoy—
                <br />
                we’ll bring your faves to you.*
              </p>
              <p className="sml">
                *At participating McDonald's. Only in the app. App registration
                required. Must be opted
                <br className="sml" />
                into MyMcDonald's Rewards.
              </p>
              <Button variant="warning" className="button">
                Earn Points on McDelivery
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger2.jpeg" alt="" className="Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="print">Free Fries Now. Free McDonald’s Later.*</h2>
              <p>
                Get Free Large Fries with a $1 minimum purchase
                <br />
                when you download the McDonald’s app & join
                <br />
                MyMcDonald’s Rewards. Then, unlock free McDonald’s
                <br />
                faves only in the app with 1500 points after your first
                <br />
                purchase as a MyMcDonald’s Rewards member.
              </p>
              <p className="sml">
                *Offer valid 1x thru the last day of the month for first time
                app users at participating
                <br />
                McDonald's. May take up to 48 hours to appear in your deals.
                Excludes delivery. Excludes
                <br />
                tax. Free MyMcDonald’s Rewards points valid 1x thru 12/31/23 for
                first time MyMcDonald’s
                <br />
                Rewards users. Program available only at participating
                McDonald’s. McD app download
                <br />
                and registration required.
              </p>
              <Button variant="warning" className="buton">
                Get Yours
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Girl.jpeg" alt="" className="Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="print">Your Story Deserves a Hollywood Ending</h2>
              <p>
                Latinos have stories to tell, yet they make up less than
                <br />
                1% of the ones told in Hollywood. As a champion of the
                <br />
                Hispanic community McDonald’s wants to help
                <br />
                change that. With Spotlight Dorado,McDonald’s is
                <br />
                giving aspiring Latino filmmakers a chance to
                <br />
                participate in a short film competition. Aspiring
                <br />
                filmmakers will bring their vision to life having their
                <br />
                story produced into a short film with invaluable
                <br />
                mentorship from renowned industry leaders and a<br />
                chance to showcase their film in film festivals around
                <br />
                the country.
              </p>
              <Button variant="warning" className="bton">
                Learn More About Spotlight Dorado
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Animate.jpeg" alt="" className="Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="prin">
                McDonald’s Black and
                <br />
                Positively Golden
                <br />
                Scholarship Program
                <br />
                Awards $1,000,000 in
                <br />
                Scholarships
              </h2>
              <p>
                McDonald’s Black and Positively Golden Scholarship
                <br />
                Program awards $1,000,000 in scholarships to
                <br />
                students attending Historically Black Colleges and
                <br />
                Universities (HBCUs) in partnership with the Thurgood
                <br />
                Marshall College Fund (TMCF). Apply now through
                <br />
                March 27th at TMCF.org.
              </p>
              <Button variant="warning" className="buton">
                Apply Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <img src="./Burger3.jpeg" alt="" className="Bur" />
            </Col>
            <Col sm={4}>
              <h2 className="print">
                Order McDelivery®
                <br />
                Now*
              </h2>
              <p>
                Get all your McDonald’s favorites delivered right to
                <br />
                your doorstep with McDelivery® on Uber Eats,
                <br />
                DoorDash or Grubhub.
              </p>
              <p className="sml">
                At participating McDonald’s. Prices may be higher than at
                restaurants. Delivery/service
                <br />
                fees apply
              </p>
              <Button variant="warning" className="butom">
                Order McDelivery Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
      <Container>
      <Row>
        <Col sm={8}>
          <img src="./Burger4.jpeg" alt="" className="Bur" />
        </Col>
        <Col sm={4}>
          <h2 className="print">
          Deals for Days
          </h2>
          <p>Get <a href="https://www.mcdonalds.com/us/en-us/deals.html">exclusive deals</a> on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.</p>
        </Col>
      </Row>
      
    </Container>
      </div>
    </>
  );
}

export default mcNav;

{
  /* <br />
              <hr />
              <br/>
              
              <Nav.Link href="#link">
                <p>Download App</p>
              </Nav.Link>
              <Nav.Link href="#home">
                <p>MyMcDonald's Rewards</p>
              </Nav.Link>
              <Nav.Link href="#link">
                <p>Exclusive Deals</p>
              </Nav.Link>
              <Nav.Link href="#home">
                <p>About Our Food</p>
              </Nav.Link>
              <Nav.Link href="#link">
                <p>Locate</p>
              </Nav.Link>
              <Nav.Link href="#link">
                <p>Gift Cards</p>
              </Nav.Link>
              <hr /> */
}
