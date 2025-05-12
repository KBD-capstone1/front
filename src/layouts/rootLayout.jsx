// import './RootLayout.css';
// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/navTabs.jsx';
import Footer from '../components/footer.jsx';
// import axios from 'axios';

export default function RootLayout() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogout = async () => {}
  return (
    <div className="Root">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

