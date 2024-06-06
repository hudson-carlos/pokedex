import { Nav, Button, Figure } from 'react-bootstrap';
import icon from '../icons/pokebola.png';
import { Link } from 'react-router-dom';
import styled from '../Components_css/NavPage.module.css';
export default () => {
  return (
    <Nav className={styled.nav}>
      <Nav.Item>
        <Link to={"/"}>
          <Button variant="outline-danger">
            <Figure>
              <Figure.Image
                  width={50}
                  src={icon}
              />
              <Figure.Caption>
                  <h6>pokedex</h6>
              </Figure.Caption>
            </Figure>
          </Button>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link to={"/"}>
          <Button variant="outline-danger">
            <Figure>
              <Figure.Image
                width={50}
                src={icon}
              />
              <Figure.Caption>
                <h6>pokedex</h6>
              </Figure.Caption>
            </Figure>
          </Button>
        </Link>   
      </Nav.Item>
    </Nav>        
  );
}
