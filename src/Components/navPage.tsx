import { Nav, Button, Figure } from 'react-bootstrap';
import icon from '../icons/pokebola.png';
import { Link } from 'react-router-dom';
import styled from '../Components_css/NavPage.module.css';
export default () => {
  return (
    <nav>
      <Link to={"/"}>
        <Button variant="outline-danger" className={styled.nav}>
          <Figure>
            <Figure.Image width={50} src={icon} />
          </Figure>
          <h4>pokedex</h4>
        </Button>
      </Link>
    </nav>        
  );
}
