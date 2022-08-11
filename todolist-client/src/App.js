import './App.css';
import sun from './icons/sun.svg';
import calender from './icons/calender.svg';
import home from './icons/home.svg';
import user from './icons/user.svg';
import plus from './icons/plus.svg';
import list from './icons/list.svg'
import { useState } from 'react';

function App() {

  const [listElements, setListElements] = useState([]);
  const [editable, setEditable] = useState(false);
  const [_, setListText] = useState('');

  const hangleTextChange = (e) => {
    if (e.code === 'Enter') {
      e.target.innerText.trim();
      setListElements([...listElements, e.target.innerText]);
      e.target.innerText = '';
      setEditable(false);
    } else {
      setListText(e.target.innerText);
    }
  };


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
        <div>
          <div className="side_bar_option">
            <img src={sun} alt="day" />
            <span>My Day</span>
          </div>
          <div className="side_bar_option">
            <img src={calender} alt="day" />
            <span>Planned</span>
          </div>
          <div className="side_bar_option">
            <img src={user} alt="day" />
            <span>Assigned to me</span>
          </div>
          <div className="side_bar_option">
            <img src={home} alt="day" />
            <span>Tasks</span>
          </div>
          <div id="side_bar_hr"></div>
        </div>
        <div id="side-bar_custom_options">
          {
            listElements.map((x, i) => <div key={i} className="side_bar_option">
              <img src={list} alt="day" />
              <span> {x}</span>
            </div>)
          }

          <div className="side_bar_option" onClick={() => setEditable(true)}>
            <img src={plus} alt="day" />
            {
              editable == false ?
                <span>New List</span> :
                <div contentEditable={editable} id="side_bar_add_new"
                  onKeyUp={hangleTextChange}></div>
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;