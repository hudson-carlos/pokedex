import { Nav, Button, Figure } from 'react-bootstrap';
import icon from '../icons/pokebola.png';
import { Link } from 'react-router-dom';
import styled from '../Components_css/NavPage.module.css';
export default () => {
  return (
    <nav className={styled.nav}>
      <Link to={"/"}>
        <Button variant="outline-danger">
          <Figure>
            <Figure.Image width={30} src={icon} />
            <h6>pokedex</h6>
          </Figure>
        </Button>
      </Link>
    </nav>        
  );
}
