import './App.css';
import React, {useState, useEffect} from "react";
import SearchBar from './components/SearchBar.jsx';
import DayDisplay from './components/DayDisplay.jsx';
import TodoList from "./components/TodoList/TodoList.jsx";
import OverdueList from "./components/TodoList/OverdueList.jsx";
import Menu from "./components/Menu/Menu.jsx";
import MenuButton from "./components/Menu/MenuButton.jsx";

function App() {
    //this is a test comment written on my mac
    const [isMobile, setMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [dateToShow, setDateToShow] = useState("");
    useEffect(() => {
        setMobile(window.innerWidth < 1000);
        setDateToShow(new Date().getDate());
    }, []);

  return (

    <div className="App h-screen font-sans">
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Menu showMenu={showMenu} dateToShow={dateToShow}/>
        <div className="p-6">
        <DayDisplay />
        <SearchBar />
        <div className=" flex flex-col  items-center align-center rounded p-4">
            <div className="  m-2 rounded p-4 w-full">
                <OverdueList isMobile={isMobile}/>
                <TodoList isMobile={isMobile}/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
