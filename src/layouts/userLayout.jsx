// import './UserLayout.css';
import { Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div className="User">
      <Outlet />
    </div>
  );
}

