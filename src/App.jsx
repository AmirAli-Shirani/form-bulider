import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Dashboard, Login} from "./components/index.jsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="bg-gradient-to-br from-[#0F2027]
                 via-[#203A43] to-[#2C5364]">

                    <Routes>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </DndProvider>
        </>
    )
}

export default App
