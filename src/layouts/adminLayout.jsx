// import './AdminLayout.css';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="Admin">
      <Outlet />
    </div>
  );
}

