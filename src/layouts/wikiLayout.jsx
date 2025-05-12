// import './WikiLayout.css';
import { Outlet } from 'react-router-dom';

export default function WikiLayout() {
  return (
    <div className="Wiki">
      <Outlet />
    </div>
  );
}

