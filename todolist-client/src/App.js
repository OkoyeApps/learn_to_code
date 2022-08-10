import './App.css';
import  sun from './icons/sun.svg';

function App() {

  return (
    <div id="body_wrapper">
      <header>
        <div id="header_wrapper">
          <div>
            <span>TODO APP</span>
          </div>
          <div>
            <input type={"text"} id="header_search" />
          </div>
        </div>
      </header>
      <div id='side_bar'>
        <img src={sun} alt="day" />
      </div>
    </div>
  );
}

export default App;