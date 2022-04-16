import logo from './logo.svg';
import './App.css';
import HomeBottom from './page/home/Bottom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          欢迎来到我的主页
        </p>
      </header>
      <bottom className="App-bottom">
        <HomeBottom className="homeButtom" city="桂" number="2022003164"/>
      </bottom>
    </div>
  );
}

export default App;
