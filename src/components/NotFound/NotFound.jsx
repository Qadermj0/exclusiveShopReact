import React from 'react';
//import './NotFound.css'; // Custom CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go to home page.</p>
      <button onClick={() => window.location.href = '/home'}>Back to home page</button>
    </div>
  );
};

export default NotFound;
