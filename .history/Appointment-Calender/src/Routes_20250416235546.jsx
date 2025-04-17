import { Routes, Route } from 'react-router-dom';
import CalendarApp from './App';
import Sidebar from './Components/Sidebar';
import Appointment from './Components/Appointment';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CalendarApp />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/appointment" element={<Appointment />} />
        </Routes>
    );
}

export default AppRoutes;