import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

interface pokemon {
  imgPokemon: string,
  namePokemon: string,
}

export default ({imgPokemon, namePokemon}: pokemon ) => (
  <>
    <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={imgPokemon} />
        <Card.Body style={{ 
        display: 'flex',
        justifyContent: 'center',
      }}>
          <Card.Text><h3>{namePokemon}</h3> </Card.Text>
        </Card.Body>
      </Card>    
  </>
)
