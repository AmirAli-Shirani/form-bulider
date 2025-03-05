import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Dashboard, Login} from "./components/index.jsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </DndProvider>
        </>
    )
}

export default App
