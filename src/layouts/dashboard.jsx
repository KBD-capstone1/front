// import './DashboardLayout.css';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="Dashboard">
      <Outlet />
    </div>
  );
}

