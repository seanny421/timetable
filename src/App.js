import './App.css';
import {useState, useEffect} from "react";
import SearchBar from './components/SearchBar.jsx';
import DayDisplay from './components/DayDisplay.jsx';
import TodoList from "./components/TodoList/TodoList.jsx";
import OverdueList from "./components/TodoList/OverdueList.jsx";
import Menu from "./components/Menu/Menu.jsx";
import MenuButton from "./components/Menu/MenuButton.jsx";

function App() {
    const [isMobile, setMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [dateToday, setDateToday] = useState("");
    useEffect(() => {
        setMobile(window.innerWidth < 1000);
        setDateToday(new Date().getDate());
    }, []);

  return (

    <div className="App h-screen font-sans">
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Menu showMenu={showMenu} dateToday={dateToday}/>
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
