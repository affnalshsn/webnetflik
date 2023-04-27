import '../component/card.css';
import Card from 'react-bootstrap/Card';

const Show = (props) => {
  return (
    <Card className="bg-dark text-white card" >
      <Card.Img src={props.gambar} alt="Card image" className='card-image ' />
        <div className='text-center tx'>{props.title}</div>
        <Card.Text>
          This is a wider card with supporting text
        </Card.Text>
    </Card>
  );
}

export default Show;