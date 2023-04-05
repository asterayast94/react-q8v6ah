import React from 'react';

// export default function Goats(props) {
export default function (props) {
  let [authMode, setAuthMode] = React.useState('home');

  if (authMode === 'home') {
    return (
      <div className="Auth-form-container">
        <h3 className="Auth-form-title">
          Welcome Home Boy From real Goats Page
        </h3>
      </div>
    );
  }
}
