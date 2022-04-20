// import logo from './logo.svg';
import './App.css';
import Leaves from './component/Leaves/Leaves';
import Nav from './component/Nav/Nav';
import HomeBottom from './page/home/Bottom';

const dealCloseMenu = () => {
  document.getElementById("short").style.display = "none";
}

function App() {
  const bottomNum = "0px";
  return (
    <div className="App" onClick={dealCloseMenu}>
      <Leaves></Leaves>
      <Nav></Nav>
      <div className='App-bottom'>
        <p style={{bottom:bottomNum}}>Powered by xiaoyi</p>
        <HomeBottom className="homeButtom" city="桂" number="2022003164"/>
      </div>
    </div>
  );
}

export default App;
