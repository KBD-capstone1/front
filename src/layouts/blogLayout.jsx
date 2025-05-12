// import './BlogLayout.css';
import { Outlet } from 'react-router-dom';

export default function BlogLayout() {
  return (
    <div className="Blog">
      <Outlet />
    </div>
  );
}

