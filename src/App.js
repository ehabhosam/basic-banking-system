import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to <div> Spark </div> Banking System</h1>
      <div className='img-container'>
        <img className='transfer-img' src={require('./media/transfer.jpg')} style={imageStyle}/>
        <Link to={'/customers'}><button className='transfer-button'>Transfer Money</button></Link>
      </div>
    </div>
  );
}
const imageStyle = {
  objectFit: 'cover',
  width: '100vw',
  margin: '0'
}

export default App;
