import Myphoto from './components/images/Myphoto.jpg';
import './App.css';

function App() {
const card={
  position: "middle",
  width : "400px",
  border: '1px solid black',
  margin : 'auto',
  boxShadow : '2px 1px 3px black',
  color : 'green',
  fontstyle: 'Tw Cen MT',
  fontsize : 16
}
const ts ={
  margintop: '-100px',
  position : 'middle',
  color: "black"
}

  return (
    <div className="App" style={card}>
      <br></br>
      
        <img src={Myphoto}  alt="logo"  width="200" heught="250"/>
       <div style={ts}>
        <p>  NAME:SNEHIL</p>
        <p>DEPT:CSE </p>
      <p>ROLLNO:2100032016</p>

        </div> 
    </div>
  );
}

export default App;