import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { monitorTabActivity } from '../utils/tabMonitor';

const TabBlocker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = monitorTabActivity(() => {
      // Lock the exam by navigating to a warning page or showing a modal
      alert('Tab switching is not allowed during the exam!');
      navigate('/error'); // Redirect to an error or lockout page
    });

    return () => cleanup();
  }, [navigate]);

  return null; // This component does not render anything
};

export default TabBlocker;
