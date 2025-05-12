// import './PortalLayout.css';
import { Outlet } from 'react-router-dom';

export default function PortalLayout() {
  return (
    <div className="Portal">
      <Outlet />
    </div>
  );
}

