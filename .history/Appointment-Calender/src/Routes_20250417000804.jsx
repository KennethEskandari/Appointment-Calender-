import { Routes, Route } from 'react-router-dom';
import CalendarApp from './App';
import Appointment from './Components/Appointment';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Appointment" element={<Appointment/>} />
        </Routes>
    );
}

export default AppRoutes;