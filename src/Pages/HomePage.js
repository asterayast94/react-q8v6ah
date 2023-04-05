import React from 'react';

// export default function Goats(props) {
import {
  sum,
  LogOut,
  checkUserLogedInStatus,
  TestFunction,
  returnListOFData,
  ShowText,
} from '../component/sessionManager.js';
export default function (props) {
  let [authMode, setAuthMode] = React.useState('home');
  checkUserLogedInStatus();
  TestFunction();

  if (authMode === 'home') {
    return (
      <div className="Auth-form-container">
        <h3 className="Auth-form-title">Welcome Home Boy From Home Page</h3>

        <button onClick={LogOut}> LogOut </button>
      </div>
    );
  }
}
