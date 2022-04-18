// import logo from './logo.svg';
import './App.css';
import Leaves from './component/Leaves';
import HomeBottom from './page/home/Bottom';

function App() {
  const bottomNum = "0px";
  return (
    <div className="App">
      <Leaves></Leaves>
      <div className='App-bottom'>
        <p style={{bottom:bottomNum}}>Powered by xiaoyi</p>
        <HomeBottom className="homeButtom" city="桂" number="2022003164"/>
      </div>
    </div>
  );
}

export default App;
